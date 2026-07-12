const User = require('../models/contactModel')

const contactControllerLogic = async (req,res) => {
    await User.create(req.body)
    res.status(201).json({
        status: true,
        message: "Thanks for contacting Yash!"
    });
}

module.exports = {
    contactControllerLogic
}