const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },

    role:{
        type:String,
        required:true,
        default:"CUSTOMER"
    },
    mobile:{
        type:String,
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    paymentinformation:[
        {
            type:mongoose.Schema.Types.ObjectId,
        ref:"payment_infomation"
        }
    ],
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ratings"
        }
    ],
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],
    createrAt:{
        type:Date,
        default:Date.now()
    }

})

const User = mongoose.model("users", userSchema);

module.exports = User;
