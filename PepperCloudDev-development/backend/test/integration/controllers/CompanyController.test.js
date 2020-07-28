var request = require('supertest');

describe('CompanyController', function() {

  describe('#index()', function() {
    it('should return index of  companies', function (done) {
      request(sails.hooks.http.app)
        .get('/api/core/companies')
        .expect(200,done)
    });
  });

  describe('#create()', function() {
    it('should create a  client', function (done) {
      request(sails.hooks.http.app)
        .post('/api/core/companies')
        .send({id: '1', name:'ashok'})
        .expect(200,done)
    });
  });

  describe('#show()', function() {
    it('should create a  client', function (done) {
      request(sails.hooks.http.app)
        .get('/api/core/companies/1')
        .expect(200,done)
    });
  });

  describe('#update()', function() {
    it('should create a  client', function (done) {
      request(sails.hooks.http.app)
        .put('/api/core/companies/1')
        .send({id: '1', name:'raj'})
        .expect(200,done)
    });
  });

  describe('#destroy()', function() {
    it('should create a  client', function (done) {
      request(sails.hooks.http.app)
        .delete('/api/core/companies/1')
        .expect(200,done)
    });
  });

});