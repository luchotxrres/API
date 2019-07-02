var mongoose = require('mongoose');
var mongo = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`
    /**
     * Probando Conexión
     */
mongoose.set('useCreateIndex', true);
mongoose.connect(mongo, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function() {
    console.log("DB connection successful");
});
module.exports = mongoose;