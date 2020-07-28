var uuid = require('node-uuid');

module.exports = {

  tableName : 'UI_SCREEN_CONTENT_DTL',
  meta : {

  },
  attributes : {
    id : {type: 'string' ,
               primaryKey: true,
               columnName: 'id',
               unique: true,
               defaultsTo: function (){ return uuid.v4(); },
               index: true,
               uuidv4: true},
    fieldId :{type:'string', columnName:'f_id', model:'UIFieldDetail'},
    screenId : {type: 'string', columnName:'scr_id', model: 'UIScreenDetail'},
    templateId : {type: 'string', columnName:'tmpt_id', model : 'ScreenTemplate'},
    sectionId : {type:'string', columnName:'sec_id', model : 'UISectionDetail'},

    required : {type: 'string',columnName: 'is_required'},
    tabIndex : {type: 'int',columnName: 'tab_index'},
    containerId : {type: 'string',columnName: 'container_id',model:'UIScreenContentDetail'},
    fieldLabelOnScreen : {type: 'string',columnName: 'label_on_screen'},
    order : {type: 'int',columnName: 'display_order'},
    preElementId : {type: 'string',columnName: 'pre_element_id'},
    postElementId : {type: 'string',columnName: 'post_element_id'},


    fieldDetail:{
      model:'UIFieldDetail',
      columnName:'f_id'
    },

    sectionDetail:{
      model:'UISectionDetail',
      columnName:'sec_id'
    },

    screenTemplate: {
      model: 'ScreenTemplate',
      columnName:'tmpt_id'
    },

    screenDetail: {
      model: 'UIScreenDetail',
      columnName:'scr_id'
    },



    children: {
        collection: 'UIScreenContentDetail',
        via: 'containerId'
    }


  }



}
