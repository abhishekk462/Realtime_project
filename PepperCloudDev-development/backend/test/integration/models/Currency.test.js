describe('CurrencyModel', function() {

  describe('#find()', function() {
    before(function (done) {
      Currency.create({currencyExtid:1,id: 1})
       .then(Currency.create({currencyExtid:1,id: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      Currency.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      Currency.tableName.should.equal("CURRENCIES");
      done();
    });
  });

  
});