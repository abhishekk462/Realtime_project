describe('UIScreenDataMapModel', function() {

  describe('#find()', function() {
    before(function (done) {
      UIScreenDataMap.create({screenId:"Luna"})
       .then(UIScreenDataMap.create({screenId:"John"})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      UIScreenDataMap.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      UIScreenDataMap.tableName.should.equal("UI_SCREEN_DATA_MAP");
      done();
    });
  });

  describe('#check screenDetail association()', function() {
    before(function (done) {
      UIScreenDetail.create({name:"John",id: '5'})
       .then(UIScreenDataMap.create({screenDetail: '5',dataScreenId: 'XYZ'})
          .then(function () {
              done();
          })
       );
    });
    it('should have a proper UI Screen Content Detail', function (done) {
      UIScreenDataMap.findOne({screenDetail: '5'}).populate("screenDetail")
      .then(function(uiScreenDataMap) {
        uiScreenDataMap.screenDetail.id.should.equal('5');
        done();
      })
      .catch(done);
    });
  });

});