require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const mysql = require('mysql2');
const conn = require('./mysqlconn');



app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use('/', require(__dirname+'/routes/index.js'));
app.use('/', require(__dirname+'/routes/lineup.js'));
app.use('/', require(__dirname+'/routes/gallery.js'));
app.use('/', require(__dirname+'/routes/faq.js'));
app.use('/', require(__dirname+'/routes/minigame.js'));
app.use('/', require(__dirname+'/routes/contactus.js'));
app.use('/', require(__dirname+'/routes/index.js'));

if(process.env.LIVE== 1){
    app.listen(process.env.PORT, console.log(`Cube Events Website on port: 5000 \nFor quick access, CTRL+CLICK here: http://localhost:5000/`));
} else {
    app.listen(process.env.PORT, console.log(`Cube Events Website`))
}
