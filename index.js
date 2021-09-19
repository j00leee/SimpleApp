/*import express from 'express';
import mongoose from 'mongoose';


const express = require('express')
require('dotenv').config();
const app = express();
const port = process.env.PORT


import userRouter from './routes/users.js';

 app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chance', (req, res) => {
    res.send('chance is cool')
})

app.get('/signin', (req, res) => {
  res.send('chance is cool')
}) 

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, 
{useNewUrlParser: true, useUnifiedTopology: true}
);

var nameSchema = new mongoose.Schema({
    userName: String,
    password: String
   });

   var User = mongoose.model("User", nameSchema);

const newUser = new User({userName: 'julie', password: 'chanceiscute'}).save();

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    console.log(path.join(__dirname, 'simpleapp', 'build', 'index.html'));
    app.use(express.static(__dirname));
    app.use(express.static(path.join(__dirname, 'simpleapp', 'build')));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, 'simpleapp', 'build', 'index.html'));
      console.log(path.join(__dirname, 'simpleapp', 'build', 'index.html'));
    });
  } */

  
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRouter from "./routes/users.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/user", userRouter);

//const CONNECTION_URL = process.env.MONGO_URI;
//const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.MONGO_URI, 
  {useNewUrlParser: true, useUnifiedTopology: true}
  ); 


//mongoose.set('useFindAndModify', false);

  