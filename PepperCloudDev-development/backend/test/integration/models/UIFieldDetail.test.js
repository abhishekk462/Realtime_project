describe('UIFieldDetailModel', function() {

  describe('#find()', function() {
    before(function (done) {
      UIFieldDetail.create({name:"Luna",id: 1})
       .then(UIFieldDetail.create({name:"John",id: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      UIFieldDetail.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      UIFieldDetail.tableName.should.equal("UI_FIELD_DTL");
      done();
    });
  });

  describe('#check uiScreenContentDetail association()', function() {
    before(function (done) {
      UIScreenContentDetail.create({'order':'6'}).exec(function(err,uiScreenContentDetail){
        UIFieldDetail.create({name:"John Cena",uiScreenContentDetail: uiScreenContentDetail.id})
          .then(function () {
              done();
          })
      })
    });
    it('should have a proper uiScreenContentDetail', function (done) {
      UIFieldDetail.findOne({name: 'John Cena'}).populate("uiScreenContentDetail")
      .then(function(uiFieldDetail) {
        uiFieldDetail.uiScreenContentDetail[0].order.should.equal("6")
        done();
      })
      .catch(done);
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

  // describe('#check fieldDetail association()', function() {
  //   before(function (done) {
  //     UIFieldType.create({code: 'XZZZ'})
  //      .then(UIFieldDetail.create({name:"John Cena",fieldType: 'XZZZ'})
  //         .then(function () {
  //             done();
  //         })
  //      );
  //   });
  //   it('should have a proper fieldDetail', function (done) {
  //     UIFieldDetail.findOne({name: 'John Cena'}).populate("fieldType")
  //     .then(function(uiFieldDetail) {
  //       console.log(uiFieldDetail);
  //       uiFieldDetail.fieldType.code.should.equal('XZZZ')
  //       done();
  //     })
  //     .catch(done);
  //   });
  // });

});