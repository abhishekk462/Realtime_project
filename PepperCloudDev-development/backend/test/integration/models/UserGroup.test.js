describe('UserGroupModel', function() {

  describe('#find()', function() {
    before(function (done) {
      UserGroup.create({name:"Luna",id: 1})
       .then(UserGroup.create({name:"John",id: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      UserGroup.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      UserGroup.tableName.should.equal("T_USER_GRP");
      done();
    });
  });

  //TO-DO test for associations
});