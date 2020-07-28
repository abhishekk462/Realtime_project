module.exports = {

  tableName : 'MENU_DTL',
  meta : {

  },
  attributes : {
    id : {type: 'integer' ,primaryKey: true,columnName: 'id',unique: true},
    menuId : {type: 'string',columnName: 'm_id'},
    type : {type: 'string',columnName: 'm_type'},

    parentId: {type: 'integer',columnName: 'm_parent' , model:'MenuDetail'},
    iconClass: {type: 'string',columnName: 'm_icon'},
    screenId: {type: 'string',columnName: 'scr_id'},
    labelKey: {type: 'string',columnName: 'm_label_key'},
    engLabel: {type: 'string',columnName: 'm_en_label'},

    cohort : {type:'string', columnName:'m_cohort', default:'P'},
    order : {type:'string', columnName:'m_order'},
    url : {type:'string', columnName:'m_url'},

    childrens: {
      collection: 'MenuDetail',
      via:'parentId'

    },

  }

}
