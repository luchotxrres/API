const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactoSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    company: String,
    email: {
        type: String,
        required: true
    },
    birthdate: Date,
    street: String,
    city: String,
    state: String,
    country: String,
    zip_code: Number,
    work_number: Number,
    home_number: Number,
    mobile_number: Number
}, {
    collection: 'contactos'
});

const ContactModel = mongoose.model('contactos', ContactoSchema);

module.exports = ContactModel;