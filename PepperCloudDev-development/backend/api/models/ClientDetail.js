module.exports = {

  tableName : 'T_CLIENT_DTL',
  meta : {

  },
  attributes : {
    id: {type: 'string',columnName: 'V_CLIENT_ID',primaryKey: true,unique: true},
    companyId: {type: 'string',columnName: 'V_COMPANY_ID'},
    activatInd: {type: 'string',columnName: 'V_ACTIVE_IND'},
    name: {type: 'string',columnName: 'V_NAME'},
    description: {type: 'string',columnName: 'V_DESCRIPTION'},
    language: {type: 'string',columnName: 'V_LANGUAGE'},
    website: {type: 'string',columnName: 'V_WEBSITE'},
    companies: {
      collection: 'CompanyDetail',
      via: 'client',
    },
    users: {
      collection: 'user',
      via: 'clients'
    }
  }

}
