const multer = require('multer'); // for handling file uploads
const upload = multer({ dest: 'uploads/' }); // configure upload destination folder
const Post = require('../model/createPost');

// POST /api/posts
 const createPost = (upload.single('image'), async (req, res) => {
  try {
    const post = await Post({
      image: req.body.image,
    //   caption: req.body.caption,
    //   author: req.body.author
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = {createPost};
