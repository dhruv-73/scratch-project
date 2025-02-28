const express = require("express")
const router = express.Router()
const upload = require("../config/multer-config")
const productModel=require("../models/product-model")

router.get("/", function (req, res) {
    res.send("Products Router Working..")
})

router.post("/create", upload.single("image"),async function (req, res) {
    // res.send(req.file)
        try {
            let { name,
                price,
                discount,
                bgcolor,
                panelcolor,
                textcolor } = req.body
        
                const product=await productModel.create({
                    image:req.file.buffer,
                    name,
                    price,
                    discount,
                    bgcolor,
                    panelcolor,
                    textcolor
                })
        
                req.flash("success","Product Created succesfully")
                res.redirect("/owners/admin")
        
        } catch (error) {
            res.send(error.message)
        }
})

module.exports = router