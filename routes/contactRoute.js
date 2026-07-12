const express = require('express')
const contactController = require('../controllers/contactController')
const validation = require('../middelwares/validationDetails')
const routerContact = express.Router()

routerContact.post('/contact',validation.validationDetails,contactController.contactControllerLogic)

module.exports = routerContact