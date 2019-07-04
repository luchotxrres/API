'use strict';
require('./../config/init.config')
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    config = require('./../config/index'),
    routes = require('./../api/routes/index.routes'),
    bodyParser = require('body-parser');

require('./../config/odm/odm.config')

app.set('port', port.APP_PORT || process.env.APP_PORT);
var initServer = async() => {
    await app.use(bodyParser.urlencoded({ extended: true }));
    await app.use(bodyParser.json());
    await routes.initRoutes(app);
    await app.listen(app.get('port'), () => { console.log(`Servidor corriendo en el puerto ${app.get('port')}`) });
}
initServer();

module.exports = app;