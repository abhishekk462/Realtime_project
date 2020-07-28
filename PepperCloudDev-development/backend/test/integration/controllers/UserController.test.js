var request = require('supertest');

describe('UserController', function() {

  describe('#index()', function() {
    it('should return index of users', function (done) {
      request(sails.hooks.http.app)
        .get('/api/core/users')
        .expect(200,done)
    });
  });

  describe('#create()', function() {
    it('should create a user', function (done) {
      request(sails.hooks.http.app)
        .post('/api/core/users')
        .send({id: '1',username:'ashok',activeInd:'Y'})
        .expect(200,done)
    });
  });

  describe('#show()', function() {
    it('should create a user', function (done) {
      request(sails.hooks.http.app)
        .get('/api/core/users/1')
        .expect(200,done)
    });
  });

  describe('#update()', function() {
    it('should create a user', function (done) {
      request(sails.hooks.http.app)
        .put('/api/core/users/1')
        .send({id: '1',username:'raj'})
        .expect(200,done)
    });
  });

  describe('#destroy()', function() {
    it('should create a user', function (done) {
      request(sails.hooks.http.app)
        .delete('/api/core/users/1')
        .expect(200,done)
    });
  });

});