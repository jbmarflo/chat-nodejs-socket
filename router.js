const express = require("express");
const router = express.Router();
const messageControllerObj = require('./controller/MessageController.js')
const MessageController = new messageControllerObj()

router.post('/message/group/:id', MessageController.create);
router.get('/message/group/:id', MessageController.getAll);
router.delete('/message/group/:id', MessageController.create);

module.exports = router;