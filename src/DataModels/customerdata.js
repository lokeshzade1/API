const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const objId = Schema.ObjectId;


const customerSchema = new Schema({
    customer_id:{type:String,require:true},
     customer_name :{type:String,require:true},
     email:{type:String,require:true},
     balance:{type:Number,require:true}
})

const customer_data = mongoose.model('customerData',customerSchema)

module.exports= customer_data;