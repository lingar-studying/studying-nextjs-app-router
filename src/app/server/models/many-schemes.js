import mongoose from "mongoose";

export const GameScheme = new mongoose.Schema({
    accumulatedPoints: {type: Number, required: true, default: 0},
    level: {type: Number, required: true, default: 0},
    gridCount: {type: String, required: true, default: 0},
    correctSelections: {type: Number, required: true, default: 0},
    date: {type: Date, default: new Date()},
    ownerUserId: {ref: "User", type: mongoose.Schema.Types.ObjectId},
    playerName: {type: String, required: true},
    rank: {type: Number, required: true},
}, {timestamps: true, strict: true},
    );

export const RecordModel = mongoose.models.record || mongoose.model("record", GameScheme);
