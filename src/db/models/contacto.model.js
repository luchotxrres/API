const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactoSchema = new Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    company: String,
    email: { type: String, required: true },
    image: { type: String, required: false },
    birthdate: { type: Date, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipcode: { type: String, required: true },
    worknumber: Number,
    homenumber: Number,
    mobilenumber: Number,
    habilitado: { type: Boolean, required: true }
}, { collection: 'contactos' });

const ContactModel = mongoose.model('Contacto', ContactoSchema);

module.exports = ContactModel;