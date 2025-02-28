const brcypt = require("bcrypt")
const {generateToken} =require("../utils/generateToken")
const userModel = require("../models/user-model")

const registerUser= async (req,res)=>{
    try {
        let { fullname, email, password } = req.body

        let user=await userModel.findOne({email:email}); 
        if(user){
            req.flash("error","You have already registered , please login");
            res.redirect('/')
        }

        brcypt.genSalt(10, function (err, salt) {
            brcypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message)

                let createdUser = await userModel.create({
                    fullname,
                    email,
                    password: hash,
                })

                const token = generateToken(createdUser)
                res.cookie("token", token)

                res.redirect("/shop")

            })
        })
    }
    catch (error) {
        res.send(error.message)
    }
}

const loginUser=async(req,res)=>{
    let {email ,password}=req.body

    let user=await userModel.findOne({email})
    
    if(!user){
        req.flash("error","Email or password is incorrect")
        return res.redirect("/")
    }

    brcypt.compare(password,user.password,function(err,result){
        if(result){
            const token=generateToken(user);
            res.cookie("token",token)

            res.redirect("/shop")
        }
        else{
            req.flash("error","Email or password is incorrect")
            res.redirect("/")
        }
    })
}

const logoutUser= function (req, res) {
    res.cookie("token","")
    res.redirect("/")
}

module.exports.registerUser=registerUser
module.exports.loginUser=loginUser
module.exports.logoutUser=logoutUser