const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,

    status: {
        type: String,
        default: "pending"
    },

    priority: {
        type: String,
        default: "medium"
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        index: true
    }
});

taskSchema.index({ status: 1, priority: 1 });

module.exports = mongoose.model("Task", taskSchema);