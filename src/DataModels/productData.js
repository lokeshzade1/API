const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const objId = Schema.ObjectId;


const productSchema = new Schema({
    Product_id :{type : String,require:true},
     Product_type : {type:String,require:true},
      Product_name : {type: String,require:true},
       Product_price : {type : Number, require:true},
        Available_quantity:{type:Number,require:true}
})

const product_data = mongoose.model('productAvl',productSchema)

module.exports= product_data;