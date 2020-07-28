var request = require('supertest');

describe('ClientController', function() {

  describe('#index()', function() {
    it('should return index of  clients', function (done) {
      request(sails.hooks.http.app)
        .get('/api/core/clients')
        .expect(200,done)
    });
  });

  describe('#create()', function() {
    it('should create a  client', function (done) {
      request(sails.hooks.http.app)
        .post('/api/core/clients')
        .send({id: '1', name:'ashok'})
        .expect(200,done)
    });
  });

  describe('#show()', function() {
    it('should create a  client', function (done) {
      request(sails.hooks.http.app)
        .get('/api/core/clients/1')
        .expect(200,done)
    });
  });

  describe('#update()', function() {
    it('should create a  client', function (done) {
      request(sails.hooks.http.app)
        .put('/api/core/clients/1')
        .send({id: '1', name:'raj'})
        .expect(200,done)
    });
  });

  describe('#destroy()', function() {
    it('should create a  client', function (done) {
      request(sails.hooks.http.app)
        .delete('/api/core/clients/1')
        .expect(200,done)
    });
  });

});