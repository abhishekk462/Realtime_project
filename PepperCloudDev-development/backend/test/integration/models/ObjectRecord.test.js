describe('ObjectRecordModel', function() {

  describe('#find()', function() {
    before(function (done) {
      ObjectRecord.create({fieldId:1,id: 1})
       .then(ObjectRecord.create({fieldId:1,id: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      ObjectRecord.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      ObjectRecord.tableName.should.equal("OBJECT_RECORD_DTL");
      done();
    });
  });

  describe('#check transactionDetail association()', function() {
    before(function (done) {
      TransactionRecord.create({screenId: '7'})
       .then(function(transactionRecord){
        ObjectRecord.create({id:"10",transactionDetail: transactionRecord.trnId})
          .then(function () {
              done();
          })
       });
    });
    it('should have a proper transactionDetail', function (done) {
      ObjectRecord.findOne({id: '10'}).populate("transactionDetail")
      .then(function(objectRecord) {
        objectRecord.transactionDetail.screenId.should.equal('7')
        done();
      })
      .catch(done);
    });
  });


});