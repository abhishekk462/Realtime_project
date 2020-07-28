describe('UIFieldParamsModel', function() {

  describe('#find()', function() {
    before(function (done) {
      UIFieldParams.create({label:"Luna",id: 1})
       .then(UIFieldParams.create({label:"John",id: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      UIFieldParams.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      UIFieldParams.tableName.should.equal("param_code");
      done();
    });
  });

  // TO-DO Not Working 
  // describe('#check fieldDetail association()', function() {
  //   before(function (done) {
  //     UIFieldDetail.create({name:"John XCena"})
  //       .then(function(uiFieldDetail){UIFieldParams.create({id: 3,fieldDetail: uiFieldDetail.fieldId})})
  //         .then(function () {
  //           done();
  //         })
  //   });
  //   it('should have a proper fieldDetail', function (done) {
  //     UIFieldParams.find().limit(3) .populate("fieldDetail")
  //     .then(function(uiFieldType) {
  //       console.log(uiFieldType)
  //       done();
  //     })
  //     .catch(done);
  //   });
  // });

});