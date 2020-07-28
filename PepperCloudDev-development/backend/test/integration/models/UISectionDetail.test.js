describe('UISectionDetailModel', function() {

  before(function(done){
    UISectionDetail.destroy({}).then(
      UIScreenContentDetail.destroy({}).then(function(){
        done();
    }))
  });

  describe('#find()', function() {
    before(function (done) {
      UISectionDetail.create({name:"Luna",secId: 1})
       .then(UISectionDetail.create({name:"John",secId: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      UISectionDetail.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      UISectionDetail.tableName.should.equal("UI_SECTION_DTL");
      done();
    });
  });

  describe('#check UI Screen Content Detail association()', function() {
    before(function (done) {
      UISectionDetail.create({name:"John",secId: '5'})
       .then(UIScreenContentDetail.create({sectionDetail: '5'})
          .then(function () {
              done();
          })
       );
    });
    it('should have a proper UI Screen Content Detail', function (done) {
      UISectionDetail.findOne({secId: '5'}).populate("uiScreenContentDetail")
      .then(function(uiSectionDetail) {
        uiSectionDetail.uiScreenContentDetail[0].sectionDetail.should.equal('5')
        done();
      })
      .catch(done);
    });
  });

}); 