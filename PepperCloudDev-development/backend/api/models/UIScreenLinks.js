var uuid = require('node-uuid');
module.exports = {

  tableName : 'UI_SCREEN_LINKS',
  autoPK: false,
  meta : {

  },
  attributes : {
    id:{
      type: 'string' ,
      primaryKey: true,
      columnName: 'id',
      unique: true,
      defaultsTo: function (){ return uuid.v4(); },
      index: true,
      uuidv4: true
    },
    screenId : {type: 'string' , columnName: 'scr_id'},
    linkType : {type:'string', columnName:'link_type'},
    linkScreenId : {type: 'string', columnName: 'link_screen_id'},
    linkUrl : {type :'string', columnName:'link_url'},
    linkExtUrl : {type:'string', columnName : 'link_ext_url'},
    description : {type: 'string',columnName: 'description'},
    active : {type: 'string',columnName: 'active'},
    expiresAt : {type: 'date',columnName: 'expires'},

    screenDetail: {
      model: 'UIScreenDetail',
      columnName:'scr_id'
    }
  }

}
