// @flow
import React, { Component } from 'react';
import { app, BrowserWindow, remote } from 'electron';
import styles from "./Assortlist.css";
import DwnModal from '../AlertModal/DwnModal.js';
import Modal from '../AlertModal/Modal.js';
import DataPreparation from '../AlertModal/DataPreparation.js';
import realm from '../../db/index';

export default class Assortfileversion extends Component {
    constructor(props) {
      super(props);
      this.Assortfileversion = React.createRef();
      this.state = {
        isModalShowing:false,
        versions: realm.objects('AssortFileVersion').filtered(`fileid = $0`,this.props.fileid)
    }  
    console.log("Versions", this.props.fileid);
    }
    componentDidMount()
    {
        let allversions = realm.objects('AssortFileVersion').filtered(`fileid = $0`,this.props.fileid);
        console.log("allversions", allversions);
        this.setState({versions: allversions});
    }

    render() {
      return this.state.versions.map(( version ) => (
        <div key={version.id} className="row">
        <div className="column">
              <div className={`left floated column ${styles.pdp_ftitle}`}>
              {version.version.toString()}
              </div><br></br>
              {/* <label className={styles.pdp_subtitle}>01.02.2019 tuesday</label> */}
          </div>
          <div className={`column ${styles.pdp_iconlign}`}>
          <i className = {styles.pdp_iconlign}></i>
          <label className = {styles.swiss_downl}>0/8(0008%)</label>
          
          <DwnModal
          className="modal"
          show={this.state.isModalShowing}
          close={this.closeModalHandler}>
              Maybe aircrafts fly very high because they don't want to be seen in plane sight?
         </DwnModal>
            <Modal 
          className="modal"
          show={this.state.isModalShowing}
          close={this.closeModalHandler}>
              Maybe aircrafts fly very high because they don't want to be seen in plane sight?
      </Modal>
   </div>   
</div>
    ));
    }
  }