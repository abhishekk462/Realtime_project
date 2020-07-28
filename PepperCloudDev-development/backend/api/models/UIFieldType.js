module.exports = {

  tableName : 'UI_FIELD_TYPE',
  meta : {

  },
  attributes : {
    code : {type: 'string' ,primaryKey: true,columnName: 'f_type_code',unique: true},
    description : {type: 'string',columnName: 'f_typ_description'},
    dataType: {type: 'string',columnName: 'f_data_typ'},

    fieldDetails: {
      collection:'UIFieldDetail',
      via: 'fieldType'
    }

  }

}