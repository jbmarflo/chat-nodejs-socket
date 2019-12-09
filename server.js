const express = require("express");
const app = express();
const PORT = process.env.PORT = 3000;
const messageControllerObj = require('./controller/MeesageController.js')
const MessageController = new messageControllerObj()
const Parse = require('body-parser')

let router = express.Router();

router.post('/message/group/:id', MessageController.create);
router.get('/message/group/:id', MessageController.create);
router.delete('/message/group/:id', MessageController.create);

app.use(Parse.json())
app.use('/',router);

app.listen(PORT,function(){
  console.log('Server is running at PORT:',PORT);
});