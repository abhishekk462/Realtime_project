describe('CompanyDetailModel', function() {

  before(function(done){
    CompanyDetail.destroy({}).then(
      ClientDetail.destroy({}).then(function(){
        done();
    }))
  });
  describe('#find()', function() {
    before(function (done) {
      CompanyDetail.create({address:"Luna",id: 1})
       .then(CompanyDetail.create({address:"John",id: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      CompanyDetail.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      CompanyDetail.tableName.should.equal("T_COMPANY_DTL");
      done();
    });
  });

  describe('#check client association()', function() {
    before(function (done) {
      ClientDetail.create({id: 'XYZ'})
       .then(CompanyDetail.create({address:"John",id: '6',client: 'XYZ'})
          .then(function () {
              done();
          })
       );
    });
    it('should have a proper client', function (done) {
      CompanyDetail.findOne({id: '6'}).populate("client")
      .then(function(company) {
        company.client.id.should.equal('XYZ');
        done();
      })
      .catch(done);
    });
  });
});