const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  status: { type: String, enum: ['Open', 'Complete'], default: 'Open' },
});

module.exports = mongoose.model('Task', TaskSchema);
