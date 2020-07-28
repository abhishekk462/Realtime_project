describe('UIFieldTypeModel', function() {

  describe('#find()', function() {
    before(function (done) {
      UIFieldType.create({description:"Luna",code: '1'})
       .then(UIFieldType.create({description:"John",code: '2'})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      UIFieldType.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      UIFieldType.tableName.should.equal("UI_FIELD_TYPE");
      done();
    });
  });

  describe('#check fieldDetail association()', function() {
    before(function (done) {
      UIFieldType.create({code: 'XZZZ'})
       .then(UIFieldDetail.create({name:"John Cena",fieldType: 'XZZZ'})
          .then(function () {
              done();
          })
       );
    });
    it('should have a proper fieldDetail', function (done) {
      UIFieldType.findOne({code: 'XZZZ'}).populate("fieldDetails")
      .then(function(uiFieldType) {
        uiFieldType.fieldDetails[0].name.should.equal("John Cena")
        done();
      })
      .catch(done);
    });
  });

});