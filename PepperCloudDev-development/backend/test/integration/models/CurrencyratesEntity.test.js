describe('CurrencyratesEntityModel', function() {

  describe('#find()', function() {
    before(function (done) {
      CurrencyratesEntity.create({anchorCurrencyId:1,
                                  id: 1,
                                  currencyrateProviderId: 1,
                                  dateEffective: "4/9/2017",
                                  dateLastModified: "4/9/2017",
                                  exchangeRate: 1.0,
                                  updateMethodId: "1"
    })
       .then(CurrencyratesEntity.create({anchorCurrencyId:1,
                                         id: 2,
                                         currencyrateProviderId: 1,
                                         dateEffective: "4/9/2017",
                                         dateLastModified: "4/9/2017",
                                         exchangeRate: 1.0,
                                         updateMethodId: "1"})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      CurrencyratesEntity.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });

  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      CurrencyratesEntity.tableName.should.equal("CURRENCYRATES");
      done();
    });
  });

  
});