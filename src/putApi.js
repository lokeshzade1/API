const express = require('express');
const productData = require('./DataModels/productData');
const customerData = require('./DataModels/customerdata');

  
const putApp = express();
putApp.put('/productName', async(req,res)=>{
    try {
        let productname = req.body.Product_name;
        let quantity = req.body.quantity
        await productData.updateOne({Product_name:productname},{Available_quantity:quantity});
        res.status(200).json({
            status:"Success"
        })
    } catch (e) {
        res.status(400).json({
            status:'Failed',
            massage:e.massage
        })
        
    }
})
putApp('/email/costOfAnOrder',async(req,res)=>{
    try {
        let email = req.body.email;
        let balance = req.body.balance
        await customerData.updateOne({email:email},{balance:balance});
        res.status(200).json({
            status:"Success"
        })
    } catch (e) {
        res.status(400).json({
            status:'Failed',
            massage:e.massage
        })
        
    }
})


module.exports = putApp;