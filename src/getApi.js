const express = require('express');
const orderData = require('./DataModels/orderData');
  
const getApp = express();

getApp.get('/orders',async (req,res)=>{
    console.log("comming in to get orders")
    try {
        let data = await orderData.find();
        res.status(200).json({
            status:"success",
            massage:data
        })
        
    } catch (e) {
        res.status(400).json({
            status:'Failed',
            massage:e.massage
        })
        
    }
})


module.exports = getApp;