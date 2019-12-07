const express = require("express");
const app = express();
const PORT = process.env.PORT = 3000;
const messageController = require('./controller/MessageController')

let router = express.Router();

router.get('/api',messageController.create);

app.use('/',router);

app.listen(PORT,function(){
  console.log('Server is running at PORT:',PORT);
});