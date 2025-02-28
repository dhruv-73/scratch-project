const mongoose=require("mongoose")
const dbr=require('debug')("development:mongoose")
const config=require("config")

mongoose.connect(`${config.get("MONGODB_URI")}/scratch-project`)
.then(function(){
    dbr("Connected to DB")
})
.catch(function(err){
    dbr("Something went wrong while connecting to DB" + err);
})


module.exports=mongoose.connection
