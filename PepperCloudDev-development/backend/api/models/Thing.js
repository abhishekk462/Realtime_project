module.exports = {

  tableName : 't_things',
  meta : {

  },
  attributes : {
    id : {type: 'integer' ,primaryKey: true,columnName: 'id',unique: true, autoIncrement:true},
    name : {type:'string'},
    info : {type:'string'},
    active : {type:'boolean'}

  }

}
