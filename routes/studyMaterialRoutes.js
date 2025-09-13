const express = require('express');
const router = express.Router();
const multer = require('multer');
const studyMaterialController = require('../controllers/StudyMaterialController');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// CRUD routes
router.post('/', upload.single('studyMaterialDocument'), studyMaterialController.createStudyMaterial);
router.get('/', studyMaterialController.getAllStudyMaterials);
router.get('/:id', studyMaterialController.getStudyMaterialById);
router.put('/:id', upload.single('studyMaterialDocument'), studyMaterialController.updateStudyMaterial);
router.delete('/:id', studyMaterialController.deleteStudyMaterial);

module.exports = router;
