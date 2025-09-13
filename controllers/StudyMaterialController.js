const StudyMaterial = require('../models/StudyMaterial');

// Create a new study material
exports.createStudyMaterial = async (req, res) => {
  try {
    const { userId, materialName, materialDescription } = req.body;
    const studyMaterialDocument = req.file ? req.file.path :"https://www.w3schools.com/python/default.asp";

    const material = new StudyMaterial({
      userId,
      materialName,
      materialDescription,
      studyMaterialDocument
    });

    await material.save();
    res.status(201).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all study materials
exports.getAllStudyMaterials = async (req, res) => {
  try {
    const materials = await StudyMaterial.find();
    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single study material by ID
exports.getStudyMaterialById = async (req, res) => {
  try {
    const material = await StudyMaterial.findById(req.params.id);
    if (!material) return res.status(404).json({ message: 'Material not found' });
    res.json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a study material
exports.updateStudyMaterial = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) updateData.studyMaterialDocument = req.file.path;

    const material = await StudyMaterial.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!material) return res.status(404).json({ message: 'Material not found' });
    res.json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a study material
exports.deleteStudyMaterial = async (req, res) => {
  try {
    const material = await StudyMaterial.findByIdAndDelete(req.params.id);
    if (!material) return res.status(404).json({ message: 'Material not found' });
    res.json({ message: 'Study material deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
