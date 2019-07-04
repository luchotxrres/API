'use strict';

var app = require('./../../api/server'),
    chai = require('chai'),
    request = require('supertest'),
    expect = chai.expect;

describe('# endpoint get contacts', () => {
    it("Should get all contacts", (done) => {
        request(app)
            .get('/contacts')
            .end((err, res) => {
                if (err) done(err)
                expect(res.status).to.equal(200);
                expect(res.body.data).to.be.an('array');
                done();
            });
    });
    it("Should get a contact", (done) => {
        request(app)
            .get('/contacts')
            .query({ id: 1 })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(200);
                expect(res.body.data).to.be.an('array');
                expect(res.body.data[0].name).to.equal('Contacto1');
                done();
            });
    });
    it("Should get a contact by email", (done) => {
        let email = 'contacto@gm.com';
        request(app)
            .get('/contacts')
            .query({ email: email })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(200);
                expect(res.body.data[0].email).to.equal(email);
                done();
            });
    })
})