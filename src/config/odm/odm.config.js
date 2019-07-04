var config = require('./../index');

var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
console.log(config.db);
mongoose.connect(config.db, { useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', () => console.log("DB connection successful"));

module.exports = mongoose;