const mongoose = require("mongoose");

const habitsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: ""
    },
    frequancy: {
        type: String,
        enum: ["daily", "weekly"],
        default: "daily",
    },
    completedDates: [
        {
            type: Date,
        },
    ],
    userId: {
        // mongodb >> object id >> _id
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("Habit", habitsSchema);