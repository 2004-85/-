// backend/routes/messages.js

const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/MessageController');

// ダイレクトメッセージ送信
router.post('/', MessageController.sendMessage);

// ダイレクトメッセージ取得
router.get('/:userId', MessageController.getMessages);

module.exports = router;
