const express=require("express")

const app=express()

app.get("/",(req,res)=>{
    res.send("Starting...")
})

app.listen(3000)