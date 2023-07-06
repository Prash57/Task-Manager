const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must Provide Name"],
    trim: true,
    maxlength: [20, "Name can't be more than 20 chars"],
  },
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
