'use strict';

var app = require('./../../api/server'),
    chai = require('chai'),
    request = require('supertest'),
    expect = chai.expect;

describe('# endpoint create contacts', () => {
    it("Should create a contact", (done) => {
        console.log(app);
        request(app)
            .post('/contacts')
            .send({ name: 'Nahuel' })
            .end((err, res) => {
                if (err) done(err)
                expect(res.status).equal(200);
                expect(res.body.name).to.equal('integration test');
                done();
            })

    })
})