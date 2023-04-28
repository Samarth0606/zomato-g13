const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery' , true);
mongoose.connect('mongodb://127.0.0.1:27017/zomato-g13')
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log(err)});


app.get('/' , (req,res)=>{
    res.send('root route');
})



app.listen(8080 , ()=>{
    console.log("port connected at 8080")
})
