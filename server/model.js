const goose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');

goose.connect("mongodb://localhost:27017/Belt", {useNewUrlParser: true},(errs)=> console.log(errs?errs:"db Belt"));

const ProductSchema = new goose.Schema({
    id:{
        type:String
    },
    name:{
        type :String,
        required:[true,"Product must contain a Name"],
        minlength:[3, "Product name must be longer than 3 characters"]
        
        
    },
    qty:{
        type : Number,
        required: [true, "Products must contain a Qty"],
        min: [0, "Qty cannot be lower than 0"]
    },
    price:{
        type:Number,
        required : [true, "Products must contain a Price"],
        min: [0, "Price cannot be lower than 0"]
    }


},{timestamps : true});

// ProductSchema.plugin(uniqueValidator,  { message: 'Error, {PATH} already in the database' });
const Belt = goose.model('Belt', ProductSchema);
module.exports = Belt;