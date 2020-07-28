describe('TransactionRecordModel', function() {

  before(function(done){
    TransactionRecord.destroy({}).then(
      ObjectRecord.destroy({}).then(function(){
        done();
    }))
  });
  describe('#find()', function() {
    before(function (done) {
      TransactionRecord.create({screenId:1,id: 1})
       .then(TransactionRecord.create({screenId:1,id: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      TransactionRecord.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      TransactionRecord.tableName.should.equal("TRN_RECORD_DTL");
      done();
    });
  });

  describe('#check records association()', function() {
    before(function (done) {
      TransactionRecord.create({screenId: '7'})
       .then(function(transactionRecord){
        ObjectRecord.create({id:"9",transactionDetail: transactionRecord.trnId})
          .then(function () {
              done();
          })
       });
    });
    it('should have a proper ObjectRecord', function (done) {
      TransactionRecord.findOne({screenId: '7'}).populate("records")
      .then(function(transactionRecord) {
        transactionRecord.records[0].id.should.equal(9)
        done();
      })
      .catch(done);
    });
  });

});