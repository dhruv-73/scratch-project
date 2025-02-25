const mongoose=require("mongoose")

const ownerSchema=mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    picture:String,
    product:{
        type:Array,
        default:[]
    },
    gstin:String,
})


module.exports=mongoose.model("Owner",ownerSchema)