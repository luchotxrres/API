const contactoModel = require('./../../models/contacto.model');

module.exports = {
    getAllcontactsServer: async () => {
        return await contactoModel.find({});
    },
    getOneContactServer: async (id) => {
        return await contactoModel.findOne({ id: id });
    },
    getOneContactByEmailServer: async (email) => {
        return await contactoModel.findOne({ email: email });
    },
    createContactServer: async (body) => {
        return await contactoModel.create(body);
    },
    updateContactServer: (body) => { },
    deleteContactServer: (id) => { }
}