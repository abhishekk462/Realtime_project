module.exports = {

  tableName : 'OBJECT_RECORD_DTL',
  meta : {

  },
  attributes : {
    id : {type: 'integer' ,primaryKey: true,columnName: 'id',unique: true,autoIncrement:true},
    fieldId : {type: 'string',columnName: 'f_id'},
    dataType : {type: 'string',columnName: 'f_data_type'},
    textValue: {type: 'string',columnName: 'text_val'},
    intValue: {type: 'integer',columnName: 'int_val'},
    dateValue: {type: 'date',columnName: 'date_val'},

    transactionDetail: {
      model: 'TransactionRecord',
      columnName:'trn_id'
    }

  }

}
