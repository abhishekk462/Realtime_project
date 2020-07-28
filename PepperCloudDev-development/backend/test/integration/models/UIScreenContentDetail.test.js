describe('UIScreenContentDetailModel', function() {

  before(function(done){
    UIScreenContentDetail.destroy({}).then(
      ScreenTemplate.destroy({}).then(function(){
        done();
    }))
  });


  describe('#find()', function() {
    before(function (done) {
      UIScreenContentDetail.create({tabindex:1})
       .then(UIScreenContentDetail.create({tabindex:1})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      UIScreenContentDetail.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      UIScreenContentDetail.tableName.should.equal("UI_SCREEN_CONTENT_DTL");
      done();
    });
  });

  describe('#check Screen Detail association()', function() {
    before(function (done) {
      UIScreenDetail.create({name:"John",id: '6'}).exec(function(err,uiScreenDetail){
        UIScreenContentDetail.create({"order":"4",screenDetail: '6'})
          .then(function () {
              done();
          })
       })
    });
    it('should have a proper Screen Content Detail', function (done) {
      UIScreenContentDetail.findOne({"order":"4"}).populate("screenDetail")
      .then(function(uiScreenContentDetail) {
        uiScreenContentDetail.screenDetail.id.should.equal('6')
        done();
      })
      .catch(done);
    });
  });

  describe('#check Section Detail association()', function() {
    before(function (done) {
      UISectionDetail.create({name:"John",secId: '5100'})
       .then(UIScreenContentDetail.create({order:40,sectionDetail: '5100'})
          .then(function () {
              done();
          })
       );
    });
    it('should have a proper Section Content Detail', function (done) {
      UIScreenContentDetail.findOne({"order":40}).populate("sectionDetail")
      .then(function(uiScreenContentDetail) {
        uiScreenContentDetail.sectionDetail.secId.should.equal('5100')
        done();
      })
      .catch(done);
    });
  });

  describe('#check screen Template association()', function() {
    before(function (done) {
       ScreenTemplate.create({name:"John"}).exec(function(err,screenTemplate){
          UIScreenContentDetail.create({order:45,screenTemplate:screenTemplate.id}).then(function(){
            done();
          })
       })
          
    });
    it('should have a proper screen Template Detail', function (done) {
      UIScreenContentDetail.findOne({"order":45}).populate("screenTemplate")
      .then(function(uiScreenContentDetail) {
        uiScreenContentDetail.screenTemplate.name.should.equal("John")
        done();
      })
      .catch(done);
    });
  });

  describe('#check fieldDetail association()', function() {
    before(function (done) {
      UIScreenContentDetail.create({order: 56}).exec(function(err,uiScreenContentDetail){
        UIFieldDetail.create({name:"John Cena",uiScreenContentDetail: uiScreenContentDetail.id}).then(function () {
              done();
          })
      })
    });
    it('should have a proper fieldDetail', function (done) {
      UIScreenContentDetail.findOne({order: 56}).populate("fieldDetail")
      .then(function(uiScreenContentDetail) {
        uiScreenContentDetail.fieldDetail.name.should.equal("John Cena")
        done();
      })
      .catch(done);
    });
  });


  // TO-DO self Association

});