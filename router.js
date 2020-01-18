const express = require("express");
const router = express.Router();
const messageControllerObj = require('./controller/MessageController.js')
const userControllerObj = require('./controller/UserController.js')
const groupControllerObj = require('./controller/GroupController.js')
const MessageController = new messageControllerObj()
const UserController = new userControllerObj()
const GroupController = new groupControllerObj()

router.post('/message/:groupId', MessageController.create);
router.get('/message/:groupId', MessageController.getAll);
/*router.delete('/message/group/:id', MessageController.create);*/

router.post('/user/login', UserController.login);
router.post('/user/register', UserController.register);

router.get('/group', GroupController.getAll);
router.post('/group/:id', GroupController.participate);
router.post('/group', GroupController.create);

module.exports = router;