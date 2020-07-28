module.exports = {

  tableName : 'oauth_refresh_tokens',
  meta : {

  },
  attributes : {
    id : {type: 'integer' ,primaryKey: true,columnName: 'id',unique: true, autoIncrement:true},
    refresh_token : {type: 'string'},

    expires : {type:'date'},
    scope : {type:'string'},

    client_id : {type:'string'},
    user_id : {type:'string'}
  }

}
