'use strict';

const handlerApi = require('./contactos.route');

module.exports.initRoutes = (app) => {
    app.use('/contactos', handlerApi())
}