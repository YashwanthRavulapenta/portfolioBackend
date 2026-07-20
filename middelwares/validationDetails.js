
const validationDetails = (req,res,next) => {
    const {username , email , subject , message} = req.body
    if(!username || !email || !subject || !message){
        return res.json({
            status : false,
            message : "Please fill in all required fields."
        })
    }
    if(!username){
        return res.json({
            status : false,
            message : "Name is required."
        })
    }
    if(!email.endsWith("@gmail.com")){
        return res.json({
            status : false,
            message : "Please enter a valid Gmail address."
        })
    }
    if(!email){
        return res.json({
            status : false,
            message : "Email is required."
        })
    }
    if(!subject){
        return res.json({
            status : false,
            message : "Subject is required."
        })
    }
    if(!message){
        return res.json({
            status : false,
            message : "Message is required."
        })
    }
    next()
}

module.exports = {
    validationDetails
}