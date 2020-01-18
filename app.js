const express = require("express");
const app = express();
const router = require('./router.js');
const Parse = require('body-parser')
const mongoose = require('mongoose');
// mongoose.connect('mongodb://jbmarflo:12345678comuhack@cluster0-shard-00-00-rdcl4.mongodb.net:27017,cluster0-shard-00-01-rdcl4.mongodb.net:27017,cluster0-shard-00-02-rdcl4.mongodb.net:27017/test', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://jbmarflo:12345678comuhack@cluster0-rdcl4.mongodb.net/test?retryWrites=true&w=majority\n', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('conectado')
});
app.use(Parse.json())
app.use('/v1',router);

module.exports = app;