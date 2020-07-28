describe('PersistentAuditEventModel', function() {

  describe('#find()', function() {
    before(function (done) {
      PersistentAuditEvent.create({principal:"Luna",id: 1})
       .then(PersistentAuditEvent.create({principal:"John",id: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      PersistentAuditEvent.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      PersistentAuditEvent.tableName.should.equal("persistent_audit_event");
      done();
    });
  });

});