'use strict';

var app = require('./../../api/server'),
    chai = require('chai'),
    request = require('supertest'),
    expect = chai.expect;

describe('# endpoint create contacts', () => {
    it("Should create a contact", (done) => {
        request(app)
            .post('/contacts')
            .send({ name: 'Nahuel' })
            .end((err, res) => {
                if (err) done(err)
                console.log(res);
                expect(res.status).equal(200);
                done();
            });
    });
    it("Should fail because the email is repeat", (done) => {
        request(app)
            .post('/contacts')
            .send({ email: 'contacto@gm.com' })
            .end((err, res) => {
                if (err) done(err);
                console.log(res.body);
                expect(res.status).to.equal(500);
                done();
            })
    })
})