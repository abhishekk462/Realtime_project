var request = require('supertest');

describe('ScreenTemplateController', function() {

  describe('#index()', function() {
    it('should return index of screentemplates', function (done) {
      request(sails.hooks.http.app)
        .get('/api/core/screentemplates')
        .expect(200,done)
    });
  });

  describe('#create()', function() {
    it('should create a screentemplate', function (done) {
      request(sails.hooks.http.app)
        .post('/api/core/screentemplates')
        .send({scrId:'ashok',activeInd:'Y'})
        .expect(200,done)
    });
  });

  describe('#show()', function() {
    it('should create a screentemplate', function (done) {
      ScreenTemplate.create({scrId:"Luna"}).then(function(screenTemplate){
      request(sails.hooks.http.app)
        .get('/api/core/screentemplates/'+screenTemplate.id)
        .expect(200,done)
      })
    });
  });

  describe('#update()', function() {
    it('should create a screentemplate', function (done) {
      ScreenTemplate.create({scrId:"Luna"}).then(function(screenTemplate){
      request(sails.hooks.http.app)
        .put('/api/core/screentemplates/1')
        .send({id:screenTemplate.id})
        .expect(200,done)
      })
    });
  });

  describe('#destroy()', function() {
    it('should create a screentemplate', function (done) {
      request(sails.hooks.http.app)
        .delete('/api/core/screentemplates/1')
        .expect(200,done)
    });
  });


});