module.exports = {

  tableName : 'ENTITY_ATTR_DTL',
  meta : {

  },
  attributes : {
    attrId : {type: 'integer' ,primaryKey: true,columnName: 'attr_id',required: true},
    attrName: {type: 'string',columnName: 'attr_name'},
    attrVal: {type: 'string',columnName: 'attr_val'}
    
  }

}