const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true
    },
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    order:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,
})


module.exports=mongoose.model("User",userSchema)