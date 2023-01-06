const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

 ObjectId.toString('customerData')
 ObjectId.toString('productAvl')
// mongoose.Types.ObjectId.isValid('customerData');
// mongoose.Types.ObjectId.isValid('productAvl');


const orderSchema = new Schema({
    customer_id:{type: ObjectId, ref: 'customerData'},
     inventory_id :{type:ObjectId,ref:'productAvl'},
     item_name :{type:String,require:true}, 
     quantity:{type:Number,require:true}

})

const customer_order_data = mongoose.model('customer_order_Data',orderSchema)

module.exports= customer_order_data;