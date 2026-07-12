require("dotenv").config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routerContact = require('./routes/contactRoute')

const app = express()

app.use(express.json())
app.use(cors())


console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongoose atlas conned anukooo")
}).catch((error)=>{
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
    console.log(error);
})

app.use(routerContact)

app.get('/',(req,res)=>{
    res.send("home page")
})

app.listen(process.env.PORT,()=>{
    console.log("server started anukoradhuu...")
})