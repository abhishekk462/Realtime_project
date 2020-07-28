module.exports = {

  tableName : 'oauth_scopes',
  meta : {

  },
  attributes : {
    id : {type: 'integer' ,primaryKey: true,columnName: 'id',unique: true, autoIncrement:true},
    scope : {type:'string'},

    is_default : {type:'boolean'}

  }

}
