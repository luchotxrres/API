'use strict';

var app = require('./../../api/server'),
    chai = require('chai'),
    request = require('supertest'),
    expect = chai.expect;


describe('# endpoint update contact', () => {
    let body = {
        id: 2,
        name: 'ContactoActualizado',
        company: 'La campera del tio solutions',
        email: 'eltio@eltio.com',
        image: '',
        birthdate: '1997-08-28',
        street: 'Calle Falsa 312',
        city: 'Lano',
        state: 'Bs',
        country: 'Argentina',
        zipcode: '1824',
        worknumber: 1130001122,
        homenumber: 1138881144,
        mobilenumber: 1149931122
    }
    it("Should update a contact", (done) => {
        request(app)
            .put('/contacts/')
            .send(body)
            .end((err, res) => {
                if (err) done(err)
                expect(res.status).equal(200);
                done();
            });
    });
    it("Should fail because id haven't relation with email", (done) => {
        body.id = 1;
        request(app)
            .put('/contacts/')
            .send(body)
            .end((err, res) => {
                if (err) done(err)
                expect(res.status).equal(500);
                done();
            })
    });
    it("Should fail because it is not exist", (done) => {
        body.id = 3;
        request(app)
            .put('/contacts/')
            .send(body)
            .end((err, res) => {
                if (err) done(err)
                expect(res.status).equal(500);
                done();
            })
    })
})