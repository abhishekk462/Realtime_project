module.exports = {

  tableName : 'oauth_authorization_codes',
  meta : {

  },
  attributes : {
    id : {type: 'integer' ,primaryKey: true,columnName: 'id',unique: true, autoIncrement:true},
    authorization_code : {type: 'string'},
    expires : {type: 'date'},
    redirect_uri : {type: 'string'},
    scope : {type:'string'},
    client_id : {type:'string'},
    user_id : {type:'string'}
  }

}
