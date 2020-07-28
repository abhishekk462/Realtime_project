describe('EntityAttrDtlEntityModel', function() {

  describe('#find()', function() {
    before(function (done) {
      EntityAttrDtlEntity.create({attrname:"Luna",attrId: 1})
       .then(EntityAttrDtlEntity.create({attrname:"John",attrId: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      EntityAttrDtlEntity.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      EntityAttrDtlEntity.tableName.should.equal("ENTITY_ATTR_DTL");
      done();
    });
  });

});