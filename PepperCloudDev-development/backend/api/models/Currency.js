module.exports = {

  tableName : 'CURRENCIES',
  meta : {

  },
  attributes : {
    currencyId: {type: 'integer',columnName: 'currency_id',primaryKey: true,unique: true},
    currencyExtid: {type: 'string',columnName: 'currency_extid'},
    dateLastModified: {type: 'date',columnName: 'date_last_modified'},
    isInactive: {type: 'string',columnName: 'is_inactive'},
    precision0: {type: 'float',columnName: 'precision_0'}
  }

}