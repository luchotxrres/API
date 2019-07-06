const contactsServer = require('./../../db/server/contactos/contactos.server');
module.exports = {
    getAllcontactsCore: async() => {
        return await contactsServer.getAllcontactsServer();
    },
    getOneContactCore: async(id) => {
        return await contactsServer.getOneContactServer(id);
    },
    createContactCore: async(body) => {
        let contact = await contactsServer.getOneContactByEmailServer(body.email);
        if (contact != null) throw new Error(`El email ${body.email} ya existe`);
        body._id = (await contactsServer.getMaxContactServer())[0]._id + 1;
        return await contactsServer.createContactServer(body);
    },
    updateContactCore: async(body) => {
        return await contactsServer.updateContactServer(body);
    },
    deleteContactCore: async(id) => {
        let contact = await contactsServer.getOneContactByIDServer(id);
        if (contact == null) throw new Error('El usuario no existe');
        return await contactsServer.deleteContactServer(id);
    }
}