module.exports = {

  tableName : 'CURRENCYRATES',
  meta : {

  },
  attributes : {
    currencyrateId: {type: 'integer',columnName: 'currencyrate_id',primaryKey: true,unique: true},
    anchorCurrencyId: {type: 'integer',columnName: 'anchor_currency_id'},
    baseCurrencyId: {type: 'integer',columnName: 'base_currency_id'},
    currencyId: {type: 'integer',columnName: 'currency_id'},
    currencyrateProviderId: {type: 'string',columnName: 'currencyrate_provider_id',required: true},
    dateEffective: {type: 'date',columnName: 'date_effective',required: true},
    dateLastModified: {type: 'date',columnName: 'date_last_modified',required: true},
    exchangeRate: {type: 'float',columnName: 'exchange_rate',required: true},
    isAnchorOnly: {type: 'string',columnName: 'is_anchor_only'},
    updateMethodId: {type: 'string',columnName: 'update_method_id',required: true}
    
  }

}