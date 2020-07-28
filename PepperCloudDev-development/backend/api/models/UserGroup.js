module.exports = {

  tableName : 'T_USER_GRP',
  meta : {

  },
  attributes : {
    id : {type: 'string' ,primaryKey: true,columnName: 'V_USER_GRP_ID',unique: true},
    name : {type: 'string',columnName: 'V_NAME'},
    parentId: {type: 'string',columnName: 'V_PARENT_ID'},


    // Add a reference to User
    members: {
      collection: 'user',
      via: 'usergroups'
    }

  }

}