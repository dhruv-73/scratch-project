const cookieParser = require("cookie-parser")
const express=require("express")
const app=express()
const expressSession=require("express-session")
const flash=require("connect-flash")
require("dotenv").config();

const path=require("path")
const db=require("./config/mongoose-connection")
const ownersRouter=require("./routes/ownersRouter")
const usersRouter=require("./routes/usersRouter")
const productsRouter=require("./routes/productsRouter")
const indexRouter=require("./routes/index")
    
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine" , "ejs")
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET
}));
app.use(flash());


app.use("/owners",ownersRouter)
app.use("/users",usersRouter)
app.use("/products",productsRouter)
app.use("/",indexRouter)


app.listen(3000)