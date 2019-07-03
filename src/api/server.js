'use strict';
require('./../config/init.config')
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    config = require('./../config/index'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

require('./../config/odm/odm.config')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/index.routes').initRoutes(app);

app.use((req, res) => res.status(404).send({ url: req.originalUrl + ' not found' }));
app.listen(process.env.APP_PORT);
console.log(`Servidor corriendo en el puerto ${process.env.APP_PORT}`);

module.exports = app;