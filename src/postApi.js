const express = require('express');
const productData = require('./DataModels/productData');
const customerData = require('./DataModels/customerdata');
const orderData = require('./DataModels/orderData');
  
const postApp = express();

postApp.post('/orders' , async (req,res)=>{
    console.log('comming in to order postApi')
    try {
        let data = req.body;
        
        let dbData = await orderData.create(data,(e)=>{{
            console.log(e)
        }})
        console.log(data,dbData);
        res.status(200).json({
            status:"Success",
            dbData
        })
        
    } catch (e) {
        res.status(400).json({
            status:"Failed",
            massage:e.massage
        })
    }
})

postApp.post('/customer' , async (req,res)=>{
    console.log('comming in to customer postApi')
    try {
        let data = req.body;
        
        let dbData = await customerData.create(data)
        console.log(data,dbData);
        res.status(200).json({
            status:"Success",
            massage:dbData
        })
        
    } catch (e) {
        res.status(400).json({
            status:"Failed",
            massage:e.massage
        })
    }
})

postApp.post('/product' , async (req,res)=>{
    console.log('comming in to product postApi')
    try {
        let data = req.body;
        
        let dbData = await productData.create(data)
        console.log(data,dbData);
        res.status(200).json({
            status:"Success",
            massage:dbData
        })
        
    } catch (e) {
        res.status(400).json({
            status:"Failed",
            massage:e.massage
        })
    }
})

module.exports = postApp;