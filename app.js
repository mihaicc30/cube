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

app.use('/', require('./routes/index.js'));
app.use('/', require('./routes/lineup.js'));
app.use('/', require('./routes/gallery.js'));
app.use('/', require('./routes/faq.js'));
app.use('/', require('./routes/minigame.js'));
app.use('/', require('./routes/contactus.js'));
app.use('/', require('./routes/index.js'));

app.listen(5000, console.log(`Cube Events Website on port: 5000 \nFor quick access, CTRL+CLICK here: http://localhost:5000/`));
