const mongoose = require('mongoose');
const mongo_unit = require('mongo-unit');
var data = require('./../helpers/init/initdb.json');
var app = require('./../api/server')
mongoose.Promise = global.Promise;

describe('Inicio', () => {
    before(async () => {
        await mongo_unit.dropDb(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`);
        return await mongo_unit.initDb(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, data);
    })
    require('./contacts/createContacts.test');
    require('./contacts/deleteContacts.test');
    require('./contacts/getContacts.test');
    require('./contacts/updateContacts.test');
});