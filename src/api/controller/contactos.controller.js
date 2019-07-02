module.exports = {
    getAllContactsController: (req, res) => {
        res.status = 200;
        res.send({ status: 'success', message: [] });
    },
    getOneContactController: (req, res) => {
        res.status = 200;
        res.send({ status: 'success', message: [] });
    },
    createContactController: (req, res) => {
        res.status = 200;
        res.send({ status: 'success', message: {} });
    },
    updateContactController: (req, res) => {
        res.status = 200;
        res.send({ status: 'success', message: {} });
    },
    deleteContactController: (req, res) => {
        res.status = 200;
        res.send({ status: 'success', message: {} });
    }
}