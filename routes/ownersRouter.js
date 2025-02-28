const express=require("express")
const router=express.Router()
const ownerModel=require("../models/owner-model")

if(process.env.NODE_ENV=="development"){
    router.get("/create",async function(req,res){
       let owner= await ownerModel.find()
       if(owner.length>0){
         return res
         .status(500)
         .send("You don't have permission to create a new owner")
       }
       const {fullname,email,password}=req.body

    const createdOwner=await ownerModel.create({
        fullname,
        email,
        password
    })

    res.status(201).send(createdOwner)
    })
}

router.get("/",function(req,res){
    res.send("Owners Router Working..")
})

router.get("/admin",function(req,res){
    const success=req.flash("success")
    res.render("createproduct",{success})
})


module.exports=router