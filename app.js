var express=require('express');
var bodyParser=require('body-parser');
var request=require('request');
const app=express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
	res.sendFile(__dirname+"/signup.htm");
});
app.post('/',function(req,res){
	var firstName=req.body.fname;
	var lastName=req.body.lname;
	var email=req.body.email;
	console.log(firstName+" "+lastName+" "+email);
});
app.listen(3000,function(){
	console.log('Server online...');
});


/*
Mail chimp API :- a78b6370b82e0988686560a8ee156ba8-us8
*/