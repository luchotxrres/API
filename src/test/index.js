const mongoose = require('mongoose');
const mongo_unit = require('mongo-unit');
var data = require('./../helpers/init/initdb.json');
mongoose.Promise = global.Promise;
describe('Inicio', () => {
    before(async () => {
        mongoose.set('useCreateIndex', true);
        await mongoose.connect('mongodb://localhost:27017/riesgo', { useNewUrlParser: true });
        mongoose.set('useFindAndModify', false);
        await mongo_unit.dropDb('mongodb://localhost:27017/riesgo');
        return mongo_unit.initDb('mongodb://localhost:27017/riesgo', data);
    })
    describe("Alta de contactos", () => {
        it("asd", () => { })
    });
    describe("Consulta de contactos", () => {
        it("asd", () => { })
    });
})