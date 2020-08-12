const express=require('express')
const bodyParser=require('body-parser')
const nodemailer=require('nodemailer')
const port=process.env.PORT||8000;

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

// let testAccount = nodemailer.createTestAccount();
// let transport={
	// host: "mail.gmail.com",
    // port: 587,
    // secure: false,
    // service:'gmail',
    // auth: {
      // user: testAccount.user, // generated ethereal user
      // pass: testAccount.pass, // generated ethereal password
    // },
    // tls:{
    	// rejectUnauthorized:false
    // }
// }
let transporter = nodemailer.createTransport({
	service:'gmail',
    auth: {
      user: 'codgem1.618@gmail.com', // generated ethereal user
      pass: 'CodGem@3.14', // generated ethereal password
    }
});


app.get('/contactus',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

let name;
let email;
let subject;
let msg;


app.post('/contactus',function(req,res){
	name=req.body.name;
	email=req.body.email
	subject=req.body.subject
	msg=req.body.msg
	let data={
		from:'codgem1.618@gmail.com',
		to:'prateek96.4@gmail.com',
		subject:subject,
		text:`name is ${name} || email is ${email} || msg is '${msg}'`
	}
	transporter.sendMail(data, function(err,info){
		if(err){
			console.log(err)
		}
		else{
			console.log('Message was sent successfully');
			console.log(info)
		}
	})

	res.redirect('/')
});

app.listen(port,function(){
	console.log('server online in port'+port)
})