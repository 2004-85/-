// backend/routes/users.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// ユーザー作成
router.post('/signup', UserController.signup);

// ユーザーログイン
router.post('/signin', UserController.signin);

module.exports = router;
