const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  taskName: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
  subject: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Optional: add virtual "id" field
taskSchema.virtual('id').get(function() {
  return this._id.toHexString();
});
taskSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Task', taskSchema);
