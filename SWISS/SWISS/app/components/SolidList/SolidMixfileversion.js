// @flow
import React, { Component } from 'react';
import { app, BrowserWindow, remote } from 'electron';
import styles from "./Solidlist.css";
import DwnModal from '../AlertModal/DwnModal.js';
import Modal from '../AlertModal/Modal.js';
import DataPreparation from '../AlertModal/DataPreparation.js';
import realm from '../../db/index';
import { Link,Switch,Route} from "react-router-dom";

export default class SolidMixfileversion extends Component {
    constructor(props) {
      super(props);
      let allversions;
      try {
        allversions = realm.objects('SolidMixFileVersion').filtered(`fileid = $0`,this.props.fileid);
      } catch (error) {
        console.log("try_catch SolidMixFileVersion:constructor:error", error)
      }
      this.SolidMixFileVersion = React.createRef();
      this.state = {
        isModalShowing:false,
        versions: allversions
    }
    console.log("Versions", this.props.fileid);
    }
    componentDidMount()
    {
        let allversions;
        try {
          allversions = realm.objects('SolidMixFileVersion').filtered(`fileid = $0`,this.props.fileid);
        } catch (error) {
          console.log("try_catch SolidMixFileVersion:constructor:error", error)
        }
        console.log("allversions", allversions);
        this.setState({versions: allversions});
    }

    render() {
      if (this.state.versions !== undefined) {
              return this.state.versions.map(( version ) => (
                <div key={version.id} className="row">
                <div className="column">
                      <div className={`left floated column ${styles.pdp_ftitle}`}>
                        <Link to= "/solidscanlist">
                          {version.version.toString()}
                        </Link>
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
      } else {
        return(<div></div>);
      }
    }
  }
