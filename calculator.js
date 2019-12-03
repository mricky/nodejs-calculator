const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({exptended:true}));
app.get("/", function(req, res){
	//res.send("<h1>Hello Calculator</h1>");
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);

	var result = num1 + num2;

	//res.send(req.body.num1);
	res.send("Thre result of calculaton is " + result);	
})


app.listen(3000, ()=> console.log("Server running on port 3000"));	