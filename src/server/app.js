"use strict";

import express from 'express'

let app = express();

app.use(express.static("public"));
app.use(express.static("build"));

app.get("/", function(req,res){
  res.send("Hello world!");
});

let server = app.listen(3001, function(){
  let host = server.address().address;
  let port = server.address().port;
  
  console.log("AVL Day listening at http://%s:%s", host, port);
});

