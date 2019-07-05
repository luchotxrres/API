const contactCore = require('./../../core/contactos/contact.core');

module.exports = {
    getAllContactsController: async(req, res) => {
        try {
            let data = await contactCore.getAllcontactsCore();
            res.status = 200;
            res.send({ status: 'success', data: data });
        } catch (err) {
            res.status = 500;
            res.send({ status: 'fail', data: null });
        }
    },
    getOneContactController: async(req, res) => {
        try {
            let data = await contactCore.getOneContactCore(req.params.id);
            res.status = 200;
            res.send({ status: 'success', data: data });
        } catch (err) {
            res.status = 500;
            res.send({ status: 'fail', data: null });
        }
    },
    createContactController: async(req, res) => {
        try {
            let body = req.body;
            body['habilitado'] = true;
            let data = await contactCore.createContactCore(body);
            res.status = 200;
            return res.send({ status: 'success', data: data[0] });
        } catch (err) {
            // var mensaje = err[Object.keys(err)[0]];
            // mensaje = mensaje[Object.keys(mensaje)[0]];
            console.log(err);
            res.statusCode = 500;
            res.send({ message: err.message });
        }
    },
    updateContactController: async(req, res) => {
        let body = {};
        let data = await contactCore.updateContactCore(body);
        res.status = 200;
        res.send({ status: 'success', message: {} });
    },
    deleteContactController: async(req, res) => {
        try {
            let data = await contactCore.deleteContactCore(req.params.id);
            res.status = 200;
            res.send({ status: 'success', message: { data } });
        } catch (err) {
            res.statusCode = 500;
            res.send({ status: res.statusCode, message: err.message });
        }
    }
}