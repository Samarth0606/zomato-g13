const express = require('express');
const User = require('../models/User');
let router = express.Router();


router.post('/register' , async(req,res)=>{
    let user = req.body;
    let Email = await User.findOne({email:user.email});
    if(Email){
        res.send('jaao jaakr naya email dhoondh kar aao');
    }
    else{
        // create a new user
    }

})

