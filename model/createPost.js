const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
//   caption: {
//     type: String,
//     required: false
//   },
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: false
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
