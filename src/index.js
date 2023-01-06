const express = require('express');
const mongoose  = require('mongoose');
const port = 3000;
const postapi  = require('./postApi');
const getApi  = require('./getApi');
const putApi = require('./putApi')
const bodyParser = require('body-parser')

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017', (e)=>{
    if(e){console.log(e)}
    else{console.log('Connect to DB')}
})
const app = express();
app.use(bodyParser.json())
app.use(postapi);
app.use(getApi);
// app.use(putApi);
app.listen(port, ()=>{
   console.log(`server is running on port ${port}`) 
})