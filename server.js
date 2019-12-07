const express = require("express");
const app = express();
const PORT = process.env.PORT = 3000;

let router = express.Router();

router.get('/api',function(req,res){
  res.json({'message' : 'Ping Successfull'});
});

app.use('/',router);

app.listen(PORT,function(){
  console.log('Server is running at PORT:',PORT);
});