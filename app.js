const express = require("express");
const app = express();
const router = require('./router.js');
const Parse = require('body-parser')

app.use(Parse.json())
app.use('/',router);

module.exports = app;