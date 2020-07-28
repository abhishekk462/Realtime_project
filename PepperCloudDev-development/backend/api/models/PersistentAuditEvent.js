module.exports = {

  tableName : 'persistent_audit_event',
  meta : {

  },
  attributes : {
    id : {type: 'integer' ,primaryKey: true,columnName: 'event_id',unique: true},
    principal : {type: 'string',required: true},
    auditEventDate : {type: 'date',columnName: 'event_date'},
    auditEventType : {type: 'string',columnName: 'event_type'}
    
  }

}
