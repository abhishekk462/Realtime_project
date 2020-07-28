var uuid = require('node-uuid');
module.exports = {

  tableName : 'T_SCREEN_TEMPLATE',
  meta : {

  },
  attributes : {
    id : {type: 'string' ,
          primaryKey: true,
          columnName: 'V_SCREEN_TEMPLATE_ID',
          unique: true,
          defaultsTo: function (){ return uuid.v4(); },
          index: true,

          uuidv4: true},
    scrId : {type: 'string',columnName: 'V_SCREEN_ID'},
    name : {type: 'string',columnName: 'V_NAME'},
    companyId : {type: 'string',columnName: 'V_COMPANY_ID'},

    fieldsList: {
        collection: 'UIScreenContentDetail',
        via: 'screenTemplate'
    },

    screenDetail: {
        model: 'UIScreenDetail',
        columnName: 'V_SCREEN_ID'
    }

  }

}
