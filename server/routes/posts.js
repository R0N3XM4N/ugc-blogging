const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.post('/', async (req, res) => {
  const { title, content, authorName, authorPhoto, authorId, hashtags } = req.body;
  const post = new Post({ title, content, authorName, authorPhoto, authorId, hashtags });
  await post.save();
  res.json(post);
});

module.exports = router;