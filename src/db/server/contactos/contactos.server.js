const contactoModel = require('./../../models/contacto.model');

module.exports = {
    getAllcontactsServer: async () => {
        return await contactoModel.find({});
    },
    getOneContactServer: async (id) => {
        return await contactoModel.findOne({ id: id });
    },
    createContactServer: (body) => { },
    updateContactServer: (body) => { },
    deleteContactServer: (id) => { }
}