import mongoose from "mongoose";

const boothSchema = new mongoose.Schema({
    boothNumber: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
        enum: ["3x3 m", "6x3 m", "6x6 m"],
        default: "3x3 m",
        required: true
    },
    status: {
        type: String,
        enum: ["Available", "Booked"],
        default: "Available",
        required: true
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true
    }
}, {timestamps: true});


export const Booth = mongoose.model('Booth', boothSchema);