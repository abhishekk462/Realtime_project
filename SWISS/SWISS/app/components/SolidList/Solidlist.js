// @flow
import React, { Component } from "react";
import styles from "./Solidlist.css";
import TitleBar from "../TitleBar";
import Encoding from 'encoding-japanese';
import XlsxPopulate from 'xlsx-populate';
import Dropzone from 'react-dropzone';
import Puid from 'puid';
import pdpUploadIcon from './upload_icon.png';
import { Link,Switch,Route} from "react-router-dom";
import DwnModal from '../AlertModal/DwnModal.js';
import Modal from '../AlertModal/Modal.js';
import DataPreparation from '../AlertModal/DataPreparation.js';

import MenuBar from "../MenuBar/Menubar";
import SolidMixfileversion from "./SolidMixfileversion";

import FooterBar from "../FooterBar";
import { Helmet } from 'react-helmet';

import realm from '../../db/index';
var puid = new Puid();

import {
  Button,
  Form,
  Header,
  Grid,
  Message,
  Segment,
  Icon,
  Image,
} from 'semantic-ui-react';



export default class SOLID extends Component {
constructor(props) {
  super(props)
  this.state = {
    files: [],
    showUploadLable:true,
    showFiles:true,
    importedFiles:[]
  }
}
componentDidMount(){
  this.setState({importedFiles: this.getImportedFiles()});
}

getImportedFiles() {
  let importedFilesObjs = realm.objects('Importfile').filtered(`TRUEPREDICATE SORT(createddate DESC) DISTINCT(filename)`);
  let SolidMixFileVersionObjs = realm.objects('SolidMixFileVersion');
  let importedFiles = Array();
  // console.log("SolidMixFileVersionObjs",SolidMixFileVersionObjs);
  // console.log("importedFiles",importedFiles);
  importedFilesObjs.map(function iterator( file ){
    let add_flg = false;
    SolidMixFileVersionObjs.forEach(function(solid_mix_version_data, index){
      if (add_flg === false) {
        console.log("solid_mix_version_data", solid_mix_version_data);
        if (solid_mix_version_data["fileid"] == file["id"]) {
          importedFiles.push(file);
          add_flg = true;
        }
      }
    });
  });
  return importedFiles;
}
copyToNewVersion(fileId)
{
  let createdtime = Date.now();
  let fileVersion =  {
    id: puid.generate(),
    fileid: fileId,
    version: new Date(),
    createdtime: createdtime,
    status: 'active'
  }
  realm.write(() => {
    realm.create('SolidMixFileVersion', fileVersion);
  });
  this.setState({importedFiles: this.getImportedFiles()});
}

onDrop(files) {
  var filessize= files.length;

  if(filessize>1){
    alert("Please upload single file");
    return;
  }
  this.setState({files});
  console.log(files);
  XlsxPopulate.fromFileAsync(files[0].path).then((workbook)=>{
    let worksheet = workbook.sheet("Sheet1");
    let fileId = puid.generate();
    let solidMixArr = Array();
    console.log(worksheet._rows)
    worksheet._rows.forEach((row,idx)=>{
      if(idx>1)
      {
        let solidMixItem = {
          id: puid.generate(),
          barcode: row.cell(1).value() || '',
          styleno:  row.cell(2).value(),
          orderid: row.cell(3).value() || '',
          skuid: row.cell(4).value() || '',
          color: row.cell(5).value() || '',
          size: row.cell(6).value(),
          pacqty: row.cell(7).value() ? row.cell(7).value().toString() : '',
          pcsqty: row.cell(8).value() ? row.cell(6).value().toString() : '',
          customer: row.cell(9).value() || '',
          createddate: new Date(),
          status: 'active',
          fileid: fileId
        };
        solidMixArr.push(solidMixItem);
        realm.write(() => {
          realm.create('SolidMix', solidMixItem);
        });
      }
    });

    let fileItem =  {
      id: fileId,
      filename: files[0].name,
      createddate: new Date(),
      rowdata:  solidMixArr
    }
    realm.write(() => {
      realm.create('Importfile', fileItem);
    });
    let createdtime = Date.now();
    let fileVersion =  {
      id: puid.generate(),
      fileid: fileId,
      version: new Date(),
      createdtime: createdtime,
      status: 'active'
    }
    realm.write(() => {
      realm.create('SolidMixFileVersion', fileVersion);
    });

    this.setState({files: [], showUploadLable:true, importedFiles: this.getImportedFiles()});

    // Check data in Assort and Files
    console.log("Files Count", realm.objects('Importfile'));
    console.log("SolidMix Count", realm.objects('SolidMix'));
  });
}
onCancel() {
  this.setState({
    files: [],
    showUploadLable:true
  });
}

operation()
{
  this.setState({
    showUploadLable:false
  })
}

render() {

  const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ))

  var importedFilesList = this.state.importedFiles.map(
      function iterator( importedFile ) {
          return(
            <div key={importedFile.id} className={`ui two column grid ${styles.pdp_grid}`}>
            <div className="row">
                <div className="column">
                      <div className={`left column ${styles.pdp_septitle}`}>
                        {importedFile.filename}
                      </div>
                  </div>
                  <div className={`column ${styles.pdp_iconlign}`}>
                  <Link to= "/downloaddata"><i className = {`icon download {styles.pdp_iconlign}`}></i></Link>
                  <i className = {`icon copy outline ${styles.pdp_iconlign}`} onClick={() => this.copyToNewVersion(importedFile.id)} ></i>


                  </div>
              </div>
              <SolidMixfileversion  fileid={ importedFile.id } />
            </div>
          );
      },
      this
    );

  return (
<div>
    <TitleBar />
    <MenuBar title="Solid List"/>

    <div className={styles.container}>
      <div className="glyph fs1" className = {styles.swiss_assortsec}>
      </div>
      <section className={styles.assort_section}>
        <div className={`ui two column grid ${styles.pdp_assort}`}>
            <Grid.Row  id={styles.row}>
              <Grid.Column>
                <div className={`column ${styles.pdp_assortlist}`}>{this.state.label}</div>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              </Grid.Row>
        </div>
        <Dropzone
          accept=".xlsx"
          onDrop={this.onDrop.bind(this)}
          onFileDialogCancel={this.onCancel.bind(this)}
        >
        {({getRootProps, getInputProps}) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div id={styles.header} onClick={()=>this.operation()}>
              <div className="ui center aligned icon header" id={styles.hdicon} >
                <img  src={pdpUploadIcon} alt="Logo" onClick={()=>this.operation()}/>
                {
                  this.state.showUploadLable?
                  <p id={styles.hdtxt}><span id={styles.hd1text}>Choose a file</span>
                  <span id={styles.hd2text}> or drag it here</span></p>
                  :null
                }
                {
                  this.state.showFiles?
                  <aside >
                    <ul id={styles.files}>{files}</ul>
                  </aside>
                  :null
                }
              </div>
            </div>
          </div>
        )}
        </Dropzone>

        <section  className={styles.section}>
          { importedFilesList }
        </section>

        {/*  //ui two column grid  end*/}

      </section>
    </div>
    <FooterBar></FooterBar>
  </div>
  )
}
}
