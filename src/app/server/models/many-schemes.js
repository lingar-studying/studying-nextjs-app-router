import mongoose from "mongoose";

export const GameScheme = new mongoose.Schema({
    level: {type: Number, required: true, default: 0},
    gridCount: {type: String, required: true, default: 0},
    correctSelections: {type: Number, required: true, default: 0},
    date: {type: Date, default: new Date()},
    ownerUserId: {ref: "User", type: mongoose.Schema.Types.ObjectId}
}, {timestamps: true});

export const RecordModel = mongoose.models.Record || mongoose.model("Record", GameScheme);
