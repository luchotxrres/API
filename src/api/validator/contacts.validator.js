const Ajv = require('ajv');
const validator = new Ajv({ allErrors: true });


module.exports = {
    validateCreateContact: (req, res, next) => {
        let body = req.body;
        const schema = {
            required: ['name', 'company', 'email', 'birthdate', 'street', 'city', 'state', 'country', 'zipcode'],
            properties: {
                name: { type: 'string' },
                company: { type: 'string' },
                email: { type: 'string', format: 'email' },
                image: { type: 'string' },
                birthdate: { type: 'string' },
                street: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
                country: { type: 'string' },
                zipcode: { type: 'string' },
                worknumber: { type: 'number' },
                homenumber: { type: 'number' },
                mobilenumber: { type: 'number' },

            }
        }
        const validate = validator.compile(schema)
        let status = validate(body);
        if (status) {
            next();
        } else {
            return res.sendStatus(400).send({ message: validate.errors[0].message });
        }
    },
    validateUpdateContact: (req, res, next) => { },
    validateGetContact: (req, res, next) => { },
    validateDeleteContact: (req, res, next) => { }
}