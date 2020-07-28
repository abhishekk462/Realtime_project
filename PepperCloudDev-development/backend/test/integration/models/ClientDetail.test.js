describe('ClientDetailModel', function() {

  before(function(done){
    CompanyDetail.destroy({}).then(
      ClientDetail.destroy({}).then(function(){
        done();
    }))
  });

  describe('#find()', function() {
    before(function (done) {
      ClientDetail.create({companyId:1,id: 1})
       .then(ClientDetail.create({companyId:1,id: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      ClientDetail.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      ClientDetail.tableName.should.equal("T_CLIENT_DTL");
      done();
    });
  });

  describe('#check client association()', function() {
    before(function (done) {
      ClientDetail.create({id: 'ZXCC'})
       .then(CompanyDetail.create({id: '10',client: 'ZXCC'})
          .then(function () {
              done();
          })
       );
    });
    it('should have a proper client', function (done) {
      ClientDetail.findOne({id: 'ZXCC'}).populate("companies")
      .then(function(client) {
        client.companies[0].id.should.equal('10');
        done();
      })
      .catch(done);
    });
  });
});