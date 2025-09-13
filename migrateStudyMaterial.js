const mongoose = require('mongoose');
const StudyMaterial = require('./models/StudyMaterial');

const mongoURI = process.env.MONGO_URI || 'your_mongo_uri_here';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const migrate = async () => {
  try {
    const sampleMaterial = new StudyMaterial({
      userId: new mongoose.Types.ObjectId(),
      materialName: 'Sample Study Material',
      materialDescription: 'This is a sample study material description',
      studyMaterialDocument: null // can add a file path if needed
    });

    await sampleMaterial.save();
    console.log('Migration completed: Study material inserted.');
    process.exit(0);
  } catch (err) {
    console.error('Migration error:', err);
    process.exit(1);
  }
};

migrate();
