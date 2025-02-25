const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/scratch-project")
.then(function(){
    console.log("Connected to DB")
})
.catch(function(err){
    console.log("Something went wrong while connecting to DB" + err);
})


module.exports=mongoose.connection
