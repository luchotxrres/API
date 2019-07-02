var express = require('express'),
    app = express();

router = require('./routes/index.routes').initRoutes(app);
app.listen(4000, () => {
    console.log(`Servidor corriendo en ${4000}`);
})

module.exports = app;