const contactsServer = require('./../../db/server/contactos/contactos.server');
module.exports = {
    getAllcontactsCore: () => { 
        return await contactsServer.getAllcontactsServer();
    },
    getOneContactCore: (id) => { 
        return await contactsServer.getOneContactServer(id);
    },
    createContactCore: (body) => { 
        return await contactsServer.createContactServer(body);
    },
    updateContactCore: (body) => { 
        return await contactsServer.updateContactServer(body);
    },
    deleteContactCore: (id) => { 
        return await contactsServer.deleteContactServer(id);
    }
}