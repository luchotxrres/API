const express = require('express');
const api = express.Router();

module.exports = (req, res) => {
    api.get('/', (req, res) => {
        res.status(200).send({ message: 'success' });
    });
    // api.get('/:id', usuarioController.obtieneUsuariosPorId)
    // api.post('/', usuarioController.creaUsuario);
    // api.put('/', usuarioController.actualizaUsuario);
    // api.delete('/', usuarioController.eliminaUsuario);
    return api;
}