module.exports = {

  tableName : 'oauth_clients',
  meta : {

  },
  attributes : {
    id : {type: 'integer' ,primaryKey: true,columnName: 'id',unique: true, autoIncrement:true},
    name : {type: 'string'},
    client_id : {type:'string'},
    client_secret : {type:'string'},
    redirect_uri : {type: 'string'},
    grant_types : {type: 'string'},
    scope : {type:'string'},

    user_id : {type:'string'}
  }

}
