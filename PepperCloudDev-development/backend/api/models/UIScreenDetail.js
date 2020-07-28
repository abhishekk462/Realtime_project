module.exports = {

  tableName : 'UI_SCREEN_DTL',
  meta : {

  },
  attributes : {
    id : {type: 'string' ,primaryKey: true,columnName: 'scr_id',unique: true},
    description : {type: 'string',columnName: 'scr_details'},
    title : {type: 'string',columnName: 'scr_title'},
    customLabel : {type: 'string',columnName: 'scr_custom_label'},
    groupCode : {type: 'string',columnName: 'scr_grp_cd'},
    parentId : {type: 'string',columnName: 'scr_parent_id'},
    layoutColumns : {type: 'integer',columnName: 'scr_layout_columns'},
    searchUrl : {type: 'string',columnName: 'scr_search_url'},

    links:{
      collection: 'UIScreenLinks',
      via: 'screenDetail'
    },

    uiScreenContentDetails: {
      collection: 'UIScreenContentDetail',
      via: 'screenDetail'
    },

    templates:{
      collection: 'ScreenTemplate',
      via: 'screenDetail'
    }

  }

}
