module.exports = {

  tableName : 'UI_SECTION_DTL',
  meta : {

  },
  attributes : {
    secId : {type: 'string' ,primaryKey: true,columnName: 'sec_id',unique: true},
    name : {type: 'string',columnName: 'sec_name'},
    description : {type: 'string',columnName: 'sec_description'},
    type : {type: 'string',columnName: 'sec_typ'},
    labelKey : {type: 'string',columnName: 'sec_label_key'},
    parentId : {type: 'string',columnName: 'parent_sec_id'},

    uiScreenContentDetail: {
      collection:'UIScreenContentDetail',
      via: 'sectionDetail'
    }
  }

}
