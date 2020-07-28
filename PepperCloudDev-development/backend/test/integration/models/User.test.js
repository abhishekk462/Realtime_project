describe('UserModel', function() {

  
  before(function(done){
    User.destroy({}).then(
      function(){
        done();
    })
  });

  describe('#find()', function() {
    before(function (done) {
      User.create({username:"Luna",id: 1})
       .then(User.create({username:"John",id: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      User.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#checkDefault()', function() {
    before(function (done) {
      User.create({username:"Luna",id: 3})
       .then(User.create({username:"John",id: 4})
          .then(function () {
              done();
          })
       );
    });
    it('should check default value', function (done) {
      User.find()
      .then(function(results) {
        results[0].activeInd.should.equal("Y")
        done();
      })
      .catch(done);
    });
  });

  describe('#check Table Name()', function() {

    it('should have a proper table name', function (done) {
      User.tableName.should.equal("T_USER");
      done();
    });
  });

  describe('#check client association()', function() {
    before(function (done) {
      ClientDetail.create({id: 'XYZ'})
       .then(User.create({username:"John",id: '5',clients: ['XYZ']})
          .then(function () {
              done();
          })
       );
    });
    it('should have a proper client', function (done) {
      User.findOne({id: '5'}).populate("clients")
      .then(function(user) {
        user.clients[0].id.should.equal('XYZ');
        done();
      })
      .catch(done);
    });
  });

  // TODO Many to Many association
  // describe('#checkGroups()', function() {
  //   // before(function (done) {
  //   //   UserGroup.create({id:'1'})
  //   //     .then(User.update('5', {groups: ['1']}).exec(function(err, user) {}))
  //   //       .then(function(){done()})
  //   // });
  //   it('should have a proper client', function (done) {
  //     User.findOne({id: '5'})
  //     .then(function(user) {
  //       console.log(user)
  //       done();
  //     })
  //     .catch(done);
  //   });
  // });

});
