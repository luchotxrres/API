require('../config/env/env.config');
require('../config/odm/odm.config');
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

require('./routes/index.routes').initRoutes(app)
var initServer = async () => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.listen(process.env.APP_PORT, () => console.log(`Servidor corriendo en el puerto ${process.env.APP_PORT}`));
}
initServer();

module.exports = app;