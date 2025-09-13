const mongoose = require('mongoose');

const studyMaterialSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  materialName: { type: String, required: true },
  materialDescription: { type: String },
  studyMaterialDocument: { type: String }, // store file path or URL
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StudyMaterial', studyMaterialSchema);
