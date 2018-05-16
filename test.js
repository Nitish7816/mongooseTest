'use strict';
const chai=require('chai');
const expect=require('chai').expect;
chai.use(require('chai-http'));
var bodyParser=require('body-parser');
var mongoose = require('mongoose');
const app=require('./index');
describe('Test for Api / crud',function () {
    before(function () {
        mongoose.connect('mongodb://localhost:27017/myappdatabase', function(){
            //console.log('Db Connected Successfully')
        });
    });
    after(function () {

    });
    it('should return all record', function () {
        return chai.request(app)
            .get('/')
            .then(function (value) {
                expect(value).to.have.status(200);
                expect(value).to.be.json;
                expect(value.body).to.be.an('array');
            });
    });
    it('should add new record', function () {
        return chai.request(app)
            .post('/')
            .send({
                name:"abcd",
                age:26,
                address:"delhi"
            })
            .then(function(res) {
                expect(res).to.have.status(201);
                expect(res).to.be.json;

                expect(res.body).to.be.an('object');
            });
    });
});
