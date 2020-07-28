describe('ScreenTemplateModel', function() {

  before(function(done){
    ScreenTemplate.destroy({}).then(function(){
        done();
    })
  });

  describe('#find()', function() {
    before(function (done) {
      ScreenTemplate.create({name:"Luna"})
       .then(ScreenTemplate.create({name:"John"})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      ScreenTemplate.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {

    it('should have a proper table name', function (done) {
      ScreenTemplate.tableName.should.equal("T_SCREEN_TEMPLATE");
      done();
    });
  });

  // TO-DO Not working
  // describe('#check screenDetail association()', function() {
  //   before(function (done) {
  //     UIScreenDetail.create({id:"zzz"})
  //      .then(ScreenTemplate.create({scrId: 'XYZ',screenDetail: 'zzz'})
  //         .then(function () {
  //             done();
  //         })
  //      );
  //   });
  //   it('should have a proper screenDetail', function (done) {
  //     ScreenTemplate.findOne({scrId: 'XYZ'}).populate("screenDetail")
  //     .then(function(screenTemplate) {
  //       screenTemplate.screenDetail.id.should.equal('zzz');
  //       done();
  //     })
  //     .catch(done);
  //   });
  // });

  
  // describe('#check screen fieldsList association()', function() {
  //   before(function (done) {
  //     ScreenTemplate.create({name:"John"})
  //       .then(function(screenTemplate){UIScreenContentDetail.create({id: 'XYZZZ',screenTemplate: screenTemplate.id})
  //         console.log(screenTemplate);
  //         done();
  //       })
  //   });
  //   it('should have a proper fieldsList', function (done) {
  //     ScreenTemplate.findOne({name: 'John'}).populate("fieldsList")
  //     .then(function(screenTemplate) {
  //       console.log(screenTemplate);
  //       screenTemplate.fieldsList[0].id.should.equal("XYZZZ");
  //       done();
  //     })
  //     .catch(done);
  //   });
  // });

});
