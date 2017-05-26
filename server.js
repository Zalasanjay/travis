var http=require('http');
var express=require('express');
var app=express();
var port = Number(process.env.PORT || 8000);

app.get('/',function(req,res){
    res.send("Hello Sanjay");
});

var server = http.createServer(app).listen(port, function() {
console.log("Server is runing at " + port);
});
