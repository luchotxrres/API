'use strict';

var app = require('./../../api/server'),
    chai = require('chai'),
    request = require('supertest'),
    expect = chai.expect;

describe('# endpoint create contacts', () => {
    let body = {
        name: 'ContactoCreado',
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
    it("Should create a contact", (done) => {
        request(app)
            .post('/contacts')
            .send(body)
            .end((err, res) => {
                if (err) done(err)
                expect(res.status).equal(200);
                done();
            });
    });

    it("Should fail because the email is repeat", (done) => {
        request(app)
            .post('/contacts')
            .send(body)
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(500);
                done();
            });
    });
    it("Should fail because the body is bad", (done) => {
        delete body.company;
        request(app)
            .post('/contacts')
            .send(body)
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(400);
                done();
            })
    })
})