'use strict'

var app = require('./../../api/server'),
    chai = require('chai'),
    request = require('supertest'),
    expect = chai.expect;

describe('# endpoint delete contact', () => {
    it("Should delete a contact", (done) => {
        request(app)
            .delete('/contacts/1')
            .send({ habilitado: false })
            .end((err, res) => {
                if (err) done(err)
                expect(res.status).equal(200);
                done();
            })
    });
    it("Should delete a contact doesn´t exist", (done) => {
        request(app)
            .delete('/contacts/77')
            .send({ habilitado: false })
            .end((err, res) => {
                if (err) done(err)
                expect(res.status).equal(500);
                done();
            })
    });
})