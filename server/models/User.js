const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: String,
  displayName: String,
  email: String,
  photoURL: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);