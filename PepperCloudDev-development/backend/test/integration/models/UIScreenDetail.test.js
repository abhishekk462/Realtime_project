describe('UIScreenDetailModel', function() {

  before(function(done){
    UIScreenDetail.destroy({}).then(
      UIScreenDataMap.destroy({}).then(
        UIScreenContentDetail.destroy({}).then(function(){
        done();
    })))
  });
  
  describe('#find()', function() {
    before(function (done) {
      UIScreenDetail.create({name:"Luna",id: 1})
       .then(UIScreenDetail.create({name:"John",id: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      UIScreenDetail.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    it('should have a proper table name', function (done) {
      UIScreenDetail.tableName.should.equal("UI_SCREEN_DTL");
      done();
    });
  });


  describe('#check dataScreens association()', function() {
    before(function (done) {
      UIScreenDetail.create({name:"John",id: '5'})
       .then(UIScreenDataMap.create({screenDetail: '5',dataScreenId: 'XYZ'})
          .then(function () {
              done();
          })
       );
    });
    it('should have a proper UI Screen Content Detail', function (done) {
      UIScreenDetail.findOne({id: '5'}).populate("dataScreens")
      .then(function(uiScreenDetail) {
        uiScreenDetail.dataScreens[0].dataScreenId.should.equal('XYZ');
        done();
      })
      .catch(done);
    });
  });

  describe('#check UI Screen Content Detail association()', function() {
    before(function (done) {
      UIScreenDetail.create({name:"John",id: '6'})
       .then(UIScreenContentDetail.create({screenDetail: '6',order:'5'})
          .then(function () {
              done();
          })
       );
    });
    it('should have a proper UI Screen Content Detail', function (done) {
      UIScreenDetail.findOne({id: '6'}).populate("uiScreenContentDetails")
      .then(function(uiScreenDetail) {
        uiScreenDetail.uiScreenContentDetails[0].order.should.equal('5')
        done();
      })
      .catch(done);
    });
  });


  describe('#check templates association()', function() {
    before(function (done) {
      UIScreenDetail.create({name:"John",id: '7'})
       .then(ScreenTemplate.create({screenDetail: '7',name:"ZZZ"})
          .then(function () {
              done();
          })
       );
    });
    it('should have a proper templates', function (done) {
      UIScreenDetail.findOne({id: '7'}).populate("templates")
      .then(function(uiScreenDetail) {
        uiScreenDetail.templates[0].name.should.equal('ZZZ')
        done();
      })
      .catch(done);
    });
  });

});