// BMI= weight/height^2 
const express=require('express');
const bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",greet);
	/* The first field  is just the location of the address of the page, on which when landed, 
	following callback function is executed. */
app.get('/bmiCalculator',function(req,res){
	res.sendFile(__dirname+"/bmiCalculator.htm")
})
	/* The first field is passed with the location where post request is made. */
app.post('/bmiCalculator',compute)
	/* We are listening to port no. 3000 for any request/response. Basically 3000 port no.
	   is our server, call back function can be anonymous or a normal function and is
	   executed when when server goes online. */
app.listen(3000,function(){
	console.log("Server online ...");
});
	/* Function definitions are made here, which are used as call back functions.
	This section shows that .get, .post call-back functions need not be anonymous functions. */
// call-back function  corresponding to home-directory
function greet(req,res){
	res.send('Welcome to our BMI calculator, add extension <strong>bmiCalculator.htm</strong> to goto our product');
}
// call-back function corresponding to /bmiCalculator.
function compute(req,res){
	let wt=parseInt(req.body.weight);
	let ht=parseInt(req.body.height);
	let result=wt/(ht*ht);
	res.send("The BMI of the person is "+result);
}
