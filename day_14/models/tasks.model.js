const { Schema, default: mongoose } = require("mongoose")

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    duration: {
        type: Number,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    cretor: String,
    color: {
        type: String,
        default: "Green"
    },
    deadline: String
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;