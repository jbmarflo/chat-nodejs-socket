const express = require("express");
const router = express.Router();
const messageControllerObj = require('./controller/MeesageController.js')
const MessageController = new messageControllerObj()

router.post('/message/group/:id', MessageController.create);
router.get('/message/group/:id', MessageController.create);
router.delete('/message/group/:id', MessageController.create);

module.exports = router;