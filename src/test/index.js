const mongoose = require('mongoose');
const mongo_unit = require('mongo-unit');
var data = require('./../helpers/init/initdb.json');
mongoose.Promise = global.Promise;
require('./../../index');

describe('Inicio', () => {
    before(async () => {
        mongoose.set('useCreateIndex', true);
        await mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, { useNewUrlParser: true });
        mongoose.set('useFindAndModify', false);
        await mongo_unit.dropDb(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`);
        return await mongo_unit.initDb(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, data);
    })
    require('./contactos/altaContactos.test');
    describe("Consulta de contactos", () => {
        it("asd", () => { })
    });
})