module.exports = {

  tableName : 'T_COMPANY_DTL',
  meta : {

  },
  attributes : {
    id: {type: 'string',columnName: 'V_COMPANY_ID',primaryKey: true,unique: true},
    address: {type: 'string',columnName: 'V_ADDRESS'},
    addressLine1: {type: 'string',columnName: 'V_ADDRESS_LINE_1'},
    addressLine2: {type: 'string',columnName: 'V_ADDRESS_LINE_2'},
    addressLine3: {type: 'string',columnName: 'V_ADDRESS_LINE_3'},
    city: {type: 'string',columnName: 'V_CITY'},
    description: {type: 'string',columnName: 'V_DESCRIPTION'},
    extId: {type: 'string',columnName: 'V_EXT_ID'},
    currencyId: {type: 'string',columnName: 'V_CURRENCY_ID'},
    email: {type: 'string',columnName: 'V_EMAIL'},
    name: {type: 'string',columnName: 'V_NAME'},
    activeInd: {type: 'string',columnName: 'V_ACTIVE_IND'},
    loginAccess: {type: 'string',columnName: 'V_LOGIN_ACCESS_IND'},
    otherName: {type: 'string',columnName: 'V_OTHER_NAME'},
    parentId: {type: 'string',columnName: 'V_PARENT_ID'},
    phone: {type: 'string',columnName: 'V_PHONE_NO'},
    state: {type: 'string',columnName: 'V_STATE'},
    subsidiary: {type: 'integer',columnName: 'V_SUBSIDIARY'},
    website: {type: 'string',columnName: 'V_WEBSITE_URL'},
    zipcode: {type: 'string',columnName: 'V_ZIP_CODE'},

    

    client: {
        model: 'ClientDetail'
    }
  }

}
