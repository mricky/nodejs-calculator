const express = require("express");

const app = express();

app.get("/", function(req, res){
	//res.send("<h1>Hello Calculator</h1>");
	res.sendFile(__dirname + "/index.html");
});


app.listen(3000, ()=> console.log("Server running on port 3000"));	