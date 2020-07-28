module.exports = {

  tableName : 'T_USER',
  meta : {

  },
  attributes : {
    id : {type: 'string' ,primaryKey: true,columnName: 'V_USER_ID',unique: true},
    extId : {type: 'string',columnName: 'V_EXT_USER_ID'},
    username : {type: 'string',columnName: 'V_USER_NAME'},
    name : {type: 'string',columnName: 'V_NAME'},
    aboutMe : {type: 'string',columnName: 'V_ABOUT_ME'},
    email : {type: 'string',columnName: 'V_EMAIL'},
    activeInd : {type: 'string',columnName: 'V_ACTIVE_IND',defaultsTo: 'Y',required: true},
    address : {type: 'string',columnName: 'V_ADDRESS'},
    receiveEmailInd : {type: 'string',columnName: 'V_RECEIVE_EMAIL_IND'},
    alias : {type: 'string',columnName: 'V_ALIAS'},
    forcastInd : {type: 'string',columnName: 'V_FORCAST_IND'},
    employmentNumber : {type: 'string',columnName: 'V_EMPLOYMENT_NUM'},
    department : {type: 'string',columnName: 'V_DEPARTMENT'},
    division : {type: 'string',columnName: 'V_DIVISION'},
    startDate : {type: 'date',columnName: 'D_START_DATE'},
    endDate : {type: 'date',columnName: 'D_END_DATE'},
    loginLimit : {type: 'integer',columnName: 'N_LOGIN_LIMIT'},
    manager : {type: 'string',columnName: 'V_MANAGER'},

    password :  {type: 'string',columnName: 'V_PASSWORD'},
    scope :  {type: 'string',columnName: 'V_SCOPE'},

    // Add a reference to UserGroup
    usergroups: {
      collection: 'usergroup',
      via: 'members',
    },

    clients: {
      collection: 'clientdetail',
      via: 'users'
    },

  }



};
