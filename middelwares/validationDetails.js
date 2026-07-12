const { json } = require("express")

const validationDetails = (req,res,next) => {
    const {username , email , subject , message} = req.body
    if(!username || !email || !subject || !message){
        return res.send("Feilds are missing...")
    }
    if(!username){
        return res.send("username missing")
    }
    if(!email.endsWith("@gmail.com")){
        return res.send("mail not appropriate")
    }
    if(!email){
        return res.send("email is missing")
    }
    if(!subject){
        return res.send("subject is mising")
    }
    if(!message){
        return res.send("message is not provided")
    }
    next()
}

module.exports = {
    validationDetails
}