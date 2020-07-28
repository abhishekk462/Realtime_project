module.exports = {

  tableName : 'param_code',
  meta : {

  },
  attributes : {
    id : {type: 'integer' ,primaryKey: true,columnName: 'id',unique: true},
    fieldId : {type: 'string',columnName: 'f_id'},
    label: {type: 'string',columnName: 'param_key'},
    value: {type: 'string',columnName: 'param_value'},
    fieldDetail: {
		model: 'UIFieldDetail'
    }

  }

}