var uuid = require('node-uuid');
module.exports = {

  tableName : 'TRN_RECORD_DTL',
  meta : {

  },
  attributes : {
    trnId : {type: 'string' ,
             primaryKey: true,
             columnName: 'trn_id',
             unique: true,
             defaultsTo: function (){ return uuid.v4(); },
             index: true,
             uuidv4: true},
    screenId : {type: 'string',columnName: 'scr_id'},
    records: {
      collection:'ObjectRecord',
      via: 'transactionDetail'
    }
    
  }

}
