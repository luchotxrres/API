const express = require('express');
const api = express.Router();
const contactController = require('./../controller/contactos.controller');

module.exports = (req, res) => {
    api.get('/', contactController.getAllContactsController);
    api.get('/:id', contactController.getOneContactController);
    api.post('/', (req, res, next) => { 
        let body = req.body;
        next();
    }, contactController.createContactController);
    api.put('/', contactController.updateContactController);
    api.delete('/', contactController.deleteContactController);
    return api;
}