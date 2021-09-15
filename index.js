const path = require('path');

const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const createError = require('http-errors')
const mongoose = require('mongoose')

//Path require
const {notFoundHandler,errorHandler} = require('./middlewares/common/errorHandler')

//Route Require
const home = require('./routes/home')
const admin = require('./routes/admin')

const app = express();
dotenv.config();

//Database Connection

mongoose.connect(process.env.MONGOOSE_STRING,
{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Database Successfully Connected")
})
.catch((err)=>{
    console.log(err)
})

//console.log(process.env.MONGOOSE_STRING);

//Requent Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set View Engine
app.set('view engine', 'ejs');

//set Static Folder
app.use(express.static('public'))

//Cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

//Routing Setup
app.use('/admin', admin);
app.use('/', home);


//Not Found Handling
app.use(notFoundHandler);


//Error Handling
app.use(errorHandler);


app.listen(process.env.PORT, ()=>{
    console.log(`app listing to port ${process.env.PORT}`);
})