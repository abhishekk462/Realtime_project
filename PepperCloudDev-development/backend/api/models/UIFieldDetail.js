var uuid = require('node-uuid');
module.exports = {

  tableName : 'UI_FIELD_DTL',
  meta : {

  },
  attributes : {
    fieldId : {type: 'string' ,
               primaryKey: true,
               columnName: 'f_id',
               unique: true,
               defaultsTo: function (){ return uuid.v4(); },
               index: true,
               uuidv4: true},
    name : {type: 'string',columnName: 'f_name'},
    typeCode : {type: 'string',columnName: 'f_typ_code'},
    labelFlag : {type: 'string',columnName: 'is_label'},
    labelKey : {type: 'string',columnName: 'label_key'},
    description : {type: 'string',columnName: 'f_description'},
    groupCode : {type: 'string',columnName: 'f_grp_cd'},
    systemFlag : {type: 'string',columnName: 'is_system_field'},
    iconClass : {type: 'string',columnName: 'f_icon_class'},
    min : {type: 'integer',columnName: 'f_min_length'},
    max : {type: 'integer',columnName: 'f_max_length'},

    uiScreenContentDetail: {
      collection:'UIScreenContentDetail',
      via: 'fieldDetail'
    },

    fieldType: {
      model: 'UIFieldType',
      columnName: 'f_typ_code'
    },

    parameters: {
      collection:'UIFieldParams',
      via: 'fieldDetail'
    },


  }

}
