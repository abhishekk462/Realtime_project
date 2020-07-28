module.exports = {

  tableName : 'ENTITY_DTL',
  meta : {

  },
  attributes : {
    entityId : {type: 'integer' ,primaryKey: true,columnName: 'entity_id',required: true},
    name : {type: 'string',required: true},
    description : {type: 'string',required: true}
  }

}