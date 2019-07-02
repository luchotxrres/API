var express = require('express'),
    app = express();

router = require('./routes/index.routes').initRoutes(app);
app.listen(process.env.APP_POTR, () => console.log(`Servidor corriendo en ${process.env.APP_POTR}`));

module.exports = app;