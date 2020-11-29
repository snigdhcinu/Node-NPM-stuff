const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/detailDB',{useNewUrlParser:true,useUnifiedTopology:true});

const detailSchema = new mongoose.Schema({
	name:String,
	location:{
		city:String,
		country:String
	}
})

const Detail = mongoose.model("Detail",detailSchema)

app.route('/')
	.get((req,res) =>{
		res.render('form',)
	})

	.post((req,res) =>{
		let name = req.body.name;
		let city = req.body.city;
		let country = req.body.country;

		const entry = new Detail({
			name:name,
			location:{
				city:city,
				country:country
			}
		});

		entry.save();
		
		setTimeout(() => {
			res.redirect('/')
		},300)
	})

let result = [];
app.route('/getInfo')
	.get((req,res) => {
		Detail.find((err,details)=>{
			if(err){
				res.send(err)
			}
			res.render('table',{result:details})

		})
	})

	.post((req,res) =>{

	})


app.listen('8000',() =>{
	console.log('server online on port 8000')
})