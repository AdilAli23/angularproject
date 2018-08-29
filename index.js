const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err)=>{
  if(err){
    console.log("Database is not connected");
  }else {
    console.log("Database is connected");
  }
});
app.use(express.static(__dirname + '/client/dist/client'));

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname + 'client/dist/client/index.html'));
});

app.listen(8080,()=>{
  console.log("Server is running");
});
