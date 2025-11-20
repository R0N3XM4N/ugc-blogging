const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Connect to Local MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ugcblog')
  .then(async () => {
    console.log('Connected to Local MongoDB (ugcblog)');

    // Insert Test User
    const newUser = new User({
      userId: 'user_001',
      userName: 'Rohan Chirbi'
    });

    await newUser.save();
    console.log('User saved successfully:', newUser);

    // Fetch all users
    const users = await User.find();
    console.log('All users:', users);

    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Connection failed:', err);
  });