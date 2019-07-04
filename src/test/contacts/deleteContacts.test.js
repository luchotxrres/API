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
                console.log(err);
                expect(res.status).equal(200);
                done();
            })
    });
})