const mongoose = require('mongoose');
const Task = require('./models/Task');

// Use your MongoDB Atlas URI
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://castrorsjeev:castro2005@cluster0.h8bqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const migrateTasks = async () => {
  try {
    // Example: Insert an initial task
    const task = new Task({
      userId: new mongoose.Types.ObjectId(), // Replace with actual user ID if available
      taskName: 'Initial Task',
      description: 'This is a sample task',
      status: 'pending',
      subject: 'General'
    });

    await task.save();
    console.log('Migration completed: Task inserted.');
    process.exit(0);
  } catch (err) {
    console.error('Migration error:', err);
    process.exit(1);
  }
};

migrateTasks();
