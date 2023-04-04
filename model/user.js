const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userImage: {
        type: String,
        required: false
      },
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      phoneNumber: {
        type: String,
        required: true
      },
      dateOfBirth: {
        type: Date,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'other']
      }
});

module.exports = mongoose.model('userDetail',userSchema)