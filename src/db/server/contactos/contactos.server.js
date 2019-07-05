const contactoModel = require('./../../models/contacto.model');

module.exports = {
    getAllcontactsServer: async() => {
        return await contactoModel.find({});
    },
    getOneContactServer: async(id) => {
        return await contactoModel.findOne({ _id: id });
    },
    getOneContactByEmailServer: async(email) => {
        return await contactoModel.findOne({ email: email });
    },
    getOneContactByIDServer: async(id) => {
        return await contactoModel.findOne({ _id: id });
    },
    getMaxContactServer: async() => {
        return await contactoModel.find({}, { _id: 1 }).sort({ _id: -1 });
    },
    createContactServer: async(body) => {
        var resp = await contactoModel.create(body);
        return await contactoModel.find({ email: body.email });
    },
    updateContactServer: (body) => {},
    deleteContactServer: async(id) => {
        return await contactoModel.updateOne({ _id: id }, { habilitado: false });
    }
}