const contactCore = require('./../../core/contactos/contact.core');

module.exports = {
    getAllContactsController: async (req, res) => {
        let data = await contactCore.getAllcontactsCore();
        res.status = 200;
        res.send({ status: 'success', message: [] });
    },
    getOneContactController: async (req, res) => {
        let data = await contactCore.getOneContactCore(req.params.id);
        res.status = 200;
        res.send({ status: 'success', message: [] });
    },
    createContactController: async (req, res) => {
        let body = {};
        console.log(req.body);
        let data = await contactCore.createContactCore(body);
        res.status = 200;
        res.send({ status: 'success', message: {} });
    },
    updateContactController: async (req, res) => {
        let body = {};
        let data = await contactCore.updateContactCore(body);
        res.status = 200;
        res.send({ status: 'success', message: {} });
    },
    deleteContactController: async (req, res) => {
        let data = await contactCore.deleteContactCore(req.params.id);
        res.status = 200;
        res.send({ status: 'success', message: {} });
    }
}