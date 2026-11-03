import { test, expect } from 'vitest';
import { RecordModel } from '../src/app/server/models/many-schemes';
import { connectDB2 } from '../src/app/server/db-services';

test('records insertion logic and top 10 ranking', async () => {
    try {
        await connectDB2();

        // a. First clean all entities
        await RecordModel.deleteMany({});

        // Hardcoded points to ensure deterministic test results
        // Expected Top 10 descending: [25000, 22000, 21000, 19000, 18000, 16000, 15000, 14000, 13000, 12000]
        const pointsList = [
            5000, 12000, 3000, 25000, 8000,
            15000, 2000, 18000, 9500, 22000,
            11000, 4000, 16000, 7000, 21000,
            13000, 6000, 19000, 10000, 14000
        ];

        // b. Insert 20 records one by one with hardcoded accumulatedPoints
        for (let i = 0; i < pointsList.length; i++) {
            await fetch('http://localhost:3000/api/memory-game/record', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    accumulatedPoints: pointsList[i],
                    level: 1,
                    gridCount: 0,
                    correctSelections: 0,
                    playerName: `Player_${i}`
                })
            });
        }

        // Fetch final records from DB to check state
        const dbRecords = await RecordModel.find({});

        // c. Validate that database contains exactly 10 records with correct sequential ranks
        expect(dbRecords.length).toBe(10);

        dbRecords.sort((a, b) => a.rank - b.rank);
        dbRecords.forEach((record, index) => {
            expect(record.rank).toBe(index + 1);
        });
    } finally {
        // d. After the test end, clean the db again
        await RecordModel.deleteMany({});
    }
});

test('GET endpoint returns records sorted by rank', async () => {
    try {
        await connectDB2();
        await RecordModel.deleteMany({});

        // Seed DB with mock records having out-of-order ranks
        await RecordModel.create([
            { accumulatedPoints: 100, rank: 3, level: 1, playerName: 'P3' },
            { accumulatedPoints: 300, rank: 1, level: 1, playerName: 'P1' },
            { accumulatedPoints: 200, rank: 2, level: 1, playerName: 'P2' }
        ]);

        const response = await fetch('http://localhost:3000/api/memory-game/record');
        const records = await response.json();

        expect(records.length).toBe(3);
        expect(records[0].rank).toBe(1);
        expect(records[1].rank).toBe(2);
        expect(records[2].rank).toBe(3);
    } finally {
        await RecordModel.deleteMany({});
    }
});

test('concurrent or sequential insertion of two records', async () => {
    try {
        await connectDB2();
        await RecordModel.deleteMany({});

        const payload1 = { accumulatedPoints: 5000, level: 1, gridCount: 0, correctSelections: 0, playerName: 'A' };
        const payload2 = { accumulatedPoints: 10000, level: 1, gridCount: 0, correctSelections: 0, playerName: 'B' };

        await Promise.all([
            fetch('http://localhost:3000/api/memory-game/record', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload1)
            }),
            fetch('http://localhost:3000/api/memory-game/record', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload2)
            })
        ]);

        const dbRecords = await RecordModel.find({});
        expect(dbRecords.length).toBe(2);
        expect(dbRecords.some(r => r.playerName === 'A')).toBe(true);
        expect(dbRecords.some(r => r.playerName === 'B')).toBe(true);
    } finally {
        await RecordModel.deleteMany({});
    }
});