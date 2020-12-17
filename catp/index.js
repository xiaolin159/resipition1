var svgCaptcha = require('svg-captcha');
const express = require('express');
const fs = require('fs');
let app = express();
 
var captcha = svgCaptcha.create();
app.get('/',(req,res)=>{
fs.writeFile('captcha.svg',captcha.data,err=>{
	if(err) return console.log(err);
		res.sendFile(__dirname+'/captcha.svg')
})
})

app.listen(8000)

