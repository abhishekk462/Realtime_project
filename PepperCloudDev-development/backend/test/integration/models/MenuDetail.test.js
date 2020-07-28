describe('MenuDetailModel', function() {

  describe('#find()', function() {
    before(function (done) {
      MenuDetail.create({menuId:1,id: 1})
       .then(MenuDetail.create({menuId:1,id: 2})
          .then(function () {
              done();
          })
       );
    });
    it('should check find function', function (done) {
      MenuDetail.find()
      .then(function(results) {
        results.length.should.equal(2)
        done();
      })
      .catch(done);
    });
  });


  
  describe('#check Table Name()', function() {
    
    it('should have a proper table name', function (done) {
      MenuDetail.tableName.should.equal("MENU_DTL");
      done();
    });
  });

  // TO-DO Self Associations

});