var express = require("express");
var http=require("http");
var app = express();
var bodyParser = require('body-parser');
var urlParser = bodyParser.urlencoded({ extended: false });

app.get('/', function(req, res) {
	console.log("Got a GET request for Login");
	res.sendFile(__dirname + "/" + "employeelogin.html");
	console.log("employeelogin.html is running");
})

app.get('/emp_index',function(req,res){
	console.log("Got a emp_index request");
	res.sendFile(__dirname+"/"+"emp_index.html")
})

app.post('/login',urlParser, function(req, res) {
	console.log("Got a POST request for login");
	res.sendFile(__dirname + "/" + "emp_index.html");
	console.log("emp_index.html is running");
})

app.get('/new_request',function(req,res){
	console.log("Got a GET request for NEW REQUEST");
	res.sendFile(__dirname+"/"+"new_request.html");	
})

var server = app.listen(2200, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("App listening at http://%s/%s",host,port);
});
