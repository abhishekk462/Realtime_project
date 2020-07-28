import Realm from 'realm';

var Importfile = function Importfile(){}
Importfile.schema = {
    name: 'Importfile',
    primaryKey: 'id',
    properties: {
      id: 'string',
      filename: 'string',
      createddate: 'date'
    }
  };

var Assort = function Assort(){}
Assort.schema = {
    name: 'Assort',
    primaryKey: 'id',
    properties: {
        id: 'string',
        barcode: 'string?',
        styleno: 'string',
        color: 'string',
        size: 'string',
        setno: 'string',
        pcsqty: 'string',
        pacqty: 'string',
        ctnqty: 'string',
        totalpcs: 'string',
        sendto: 'string?',
        createddate: 'date',
        status: 'string',
        fileid: 'string'
    }
  };

var AssortFileVersion = function Importfile(){}
AssortFileVersion.schema = {
    name: 'AssortFileVersion',
    primaryKey: 'id',
    properties: {
      id: 'string',
      fileid: 'string',
      version: 'date',
      createdtime: 'int',
      status: 'string'
    }
};

var SolidMixImportfile = function SolidMixImportfile(){}
SolidMixImportfile.schema = {
    name: 'SolidMixImportfile',
    primaryKey: 'id',
    properties: {
      id: 'string',
      filename: 'string',
      createddate: 'date'
    }
  };
var SolidMix = function SolidMix(){}
SolidMix.schema = {
    name: 'SolidMix',
    primaryKey: 'id',
    properties: {
        id: 'string',
        barcode: 'string?',
        styleno: 'string',
        orderid: 'string',
        skuid: 'string',
        color: 'string',
        size: 'string',
        pacqty: 'string',
        pcsqty: 'string',
        customer: 'string?',
        createddate: 'date',
        status: 'string',
        fileid: 'string'
    }
  };

  var SolidMixFileVersion = function SolidMixFileVersion(){}
  SolidMixFileVersion.schema = {
      name: 'SolidMixFileVersion',
      primaryKey: 'id',
      properties: {
        id: 'string',
        fileid: 'string',
        version: 'date',
        createdtime: 'int',
        status: 'string'
      }
  };
export default new Realm({schema: [Importfile, Assort, AssortFileVersion, SolidMixImportfile, SolidMix, SolidMixFileVersion] });
