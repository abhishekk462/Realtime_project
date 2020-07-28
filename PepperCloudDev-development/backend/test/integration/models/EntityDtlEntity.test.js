describe('EntityDtlEntityModel', function() {
  
  after(function(done){
    EntityDtlEntity.destroy({}).then(
      ClientDetail.destroy({}).then(function(){
        done();
    }))
  });
  describe('#find()', function() {
    before(function (done) {
      EntityDtlEntity.create({name:"Luna",entityId: 1,description: "xcv"})
       .then(EntityDtlEntity.create({name:"John",entityId: 2,description: "xcv"})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      EntityDtlEntity.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });

  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      EntityDtlEntity.tableName.should.equal("ENTITY_DTL");
      done();
    });
  });

});
