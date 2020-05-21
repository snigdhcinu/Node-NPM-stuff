const fs=require('fs');
const express=require('express');
const bodyParser=require('body-parser');
const uniqid=require('uniqid');
const id=uniqid();
const PDFDocument=require('pdfkit');
var app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html')
});
app.post('/',function(req,res){
	var name=req.body.name;
	var date=req.body.date;
	var product=req.body.product;
	var quantity=req.body.quantity;
	var price=10*quantity;
	const doc=new PDFDocument;
	doc.pipe(fs.createWriteStream(__dirname+'/orderID.pdf'));
	doc.font('fonts/Palatino.ttf')
   	.fontSize(25) 	
   	// .text('The order id is :-'+' '+id, 100, 100);
   	.list(["Receipt id :- "+" "+id,"Customer Name :-"+" "+name,"Date of purchase :-"+" "+date,"Product bought :-"+" "+product
   		,"Quantity purchased :- "+" "+quantity,"Total cost :- "+" "+price],100,100)
   	doc.end();	// Important to close the document.
   	// res.send('order-id :-'+' '+id);
})
app.listen(3000,function(){
	console.log('server online on port no. 3000......');
})

/*				PROJECT SPECIFIC DETAILS.
1. Install the basic dependencies as mentined in package.json.
2. We are using npm uniqid to generate unique id.
3. We are using npm pdf kit to generate PDF document.
4. pipe method is used to create our PDF file.
5. font method is used to set the font of the text inside our PDF file.
6. fontSize, and text methods set font size, and the input string respectively.
7. end method is used to terminate the pipe, very important otherwise PDF is corrupt.
8. We need to require fs native node module, since we are using file-system things
	as seen in line no. 19.
9. We are doing these steps under app.post(), because we want them to execute when we
    send data to our server.
10. For more information and variations, refer to pdfkit documentation.
*/