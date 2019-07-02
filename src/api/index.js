require('./../config/env/env.config');
require('./../config/odm/odm.config');
var express = require('express'),
    app = express();

router = require('./routes/index.routes').initRoutes(app);
app.listen(process.env.APP_PORT, () => console.log(`Servidor corriendo en el puerto ${process.env.APP_PORT}`));

module.exports = app;