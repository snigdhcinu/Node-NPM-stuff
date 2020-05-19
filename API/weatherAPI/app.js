const express= require('express');
// require native https node module .
const https=require('https');
const bodyParser=require('body-parser');
const app=express();
	// What happens when we try to go to our homepage
	app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
	// when we request for home directory, we receive as response
	res.sendFile(__dirname+"/index.htm");
});
app.post("/",function(req,res){
const query=req.body.cityName;
const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=9917fa91df3810f511762ade46f459f5&units=metric"
 	// we'll make https request for data.
 https.get(url,function(response){

 	/* A good technique to know whether or not data fetch was successful
 	 is by using response.statusCode 202 => success.*/
 	console.log(response.statusCode);
 	response.on("data",function(data){
 		/* Data is currently in hexadecimal value, and it needs to be changed to json 
 		format. This is done by using the following lines of code*/
 		const weatherData=JSON.parse(data);
 		const temp=weatherData.main.temp;
 		const weatherDescription=weatherData.weather[0].description;
 		const weathericon=weatherData.weather[0].icon;
 		const weathericonurl="http://openweathermap.org/img/wn/"+weathericon+"@2x.png"
 		res.write("<h1>The temperature of "+query+" is "+temp+" degree celcius</h1>");
 		res.write("<h3> The weather is currently "+weatherDescription+"</h3>");
 		res.write("<img src='"+weathericonurl+"'/>")
 		res.send();
 		 	});
 });
});
app.listen(3000,function(){
	console.log("Server Online ...");
	});

