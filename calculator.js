const express=require('express');
const bodyParser=require('body-parser');
var app=express(); // app is bound to express module .
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
	res.send('Welcome to our server-side implemented calculator .');
}); // handling responses, get requests made to our server .
app.get('/index.htm',function(req,res){
	res.sendFile(__dirname+"/index.htm")
});

app.post('/',function(req,res){
	// The body parser returns string, so we need to convert it to number/integer/float .
	let num1=parseInt(req.body.num1); // alternatively, we could use number() instead of parseInt.
	let num2=parseInt(req.body.num2);
	if(req.body.operator=='+'){
		let result=num1+num2;
		res.send("The result is "+result);
	}
	if(req.body.operator=='*'){
		let result=num1*num2;
		res.send("The result is "+result);
	}
	if(req.body.operator=='-'){
		let result=num1-num2;
		res.send("The result is "+result);
	}
	if(req.body.operator=='/'){
		let result=num1/num2;
		res.send("The result is "+result);
	}
}); // Handle request and response of post request.
app.listen(3000,function(){
	console.log("Server is online ...");
}); // Start listening to port 3000 for any request made to server .
