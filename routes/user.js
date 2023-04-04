const { createPost } = require('../controller/createPost');
const {Login, AddUser} = require('../controller/user');

// const express = require('express');

const express = require("express");
const router = express.Router();

// const router = express.Router();

router.post('/register', AddUser);

router.post('/login', Login);

router.post("/post",createPost)

module.exports = router;