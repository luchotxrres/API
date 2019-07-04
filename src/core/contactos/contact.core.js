const contactsServer = require('./../../db/server/contactos/contactos.server');
module.exports = {
    getAllcontactsCore: async () => {
        return await contactsServer.getAllcontactsServer();
    },
    getOneContactCore: async (id) => {
        return await contactsServer.getOneContactServer(id);
    },
    createContactCore: async (body) => {
        let contact = await contactsServer.getOneContactByEmailServer(body.email);
        if (contact === undefined) throw new Error(`El email ${body.email} ya existe`);
        return await contactsServer.createContactServer(body);
    },
    updateContactCore: async (body) => {
        return await contactsServer.updateContactServer(body);
    },
    deleteContactCore: async (id) => {
        return await contactsServer.deleteContactServer(id);
    }
}