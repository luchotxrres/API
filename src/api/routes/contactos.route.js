const express = require('express');
const api = express.Router();
const contactController = require('./../controller/contactos.controller');
const contactValidator = require('./../validator/contacts.validator');

module.exports = (req, res, next) => {
    api.get('/', contactController.getAllContactsController);
    api.get('/:id', contactController.getOneContactController);
    api.post('/', contactValidator.validateCreateContact, contactController.createContactController);
    api.put('/', contactController.updateContactController);
    api.delete('/:id', contactController.deleteContactController);
    return api;
}