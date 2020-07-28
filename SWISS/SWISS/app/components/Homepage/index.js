// @flow
import React, { Component } from "react";
import styles from "./Home.css";
import TitleBar from "../TitleBar";
import assortblue from './assort.png';
import settings from './settings.png';
import assort_original from './assort_hover.png';
import ASSORT from "../AssortList/Assortlist";
import trashlist from "../TrashList/TrashList";
import Licence from '../AlertModal/licence.js';
import FooterBar from "../FooterBar";
import DwnModal from '../AlertModal/DwnModal.js';
import Modal from '../AlertModal/Modal.js';
import { Link,Switch,Route, BrowserRouter as Router,NavLink} from "react-router-dom";
import {
  Button,
  Form,
  Label,
  Header,
  Grid,
  Message,
  Segment,
  Icon,
  Image,
} from 'semantic-ui-react';


export default class Home extends Component {
  constructor(props) {
    super(props)
  this.state = {
    footertext: "15th Dec, 2019"
  }
}


  render() {

    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
    const currDate = "Current Date= "+date;

    return (
  <div>


      <div className={styles.container}>
      <TitleBar />
      <div>

      <Link to = '/settings' id={styles.link}><img  id={styles.setting}src={settings} /></Link>

      </div>
      <div className="glyph fs1">

            <div className="clearfix bshadow0 pbs">
                <div className="icon-swiss_icon" id={styles.swiss_icon}> </div>
                <p id={styles.header}>Sorting Work Indispensable Scanning System </p>
            </div>
         </div>
      <p id={styles.text}>Choose a section to start.Have a nice day! </p>
      <div id={styles.outer}>

    <div id={styles.outdiv}>
      <div id={styles.indiv}>
      <Grid>

<Grid.Row columns={4}>
<Grid.Column id={styles.col2}>
<Link to = '/assort/assortlist' id={styles.link}>
    <div id={styles.seg}>
    <div id={styles.child_div_1}>
    <div className="icon-assort_icon"></div>
    </div>
            <div id={styles.text2}>ASSORT</div></div>
            </Link>
  </Grid.Column>
  <Grid.Column id={styles.col2}>
    <Link to = '/solidlist' id={styles.link}>
  <div id={styles.seg}  >
  <div id={styles.child_div_1}>
  <div id={styles.icon} className="icon-solid_icon"></div>
  </div>
            <div id={styles.text2}>SOLID</div>

            </div>
           </Link>

  </Grid.Column>
  <Grid.Column id={styles.col2}>
  <Link to = '/mixlist'  id={styles.link}>
  <div id={styles.seg} >
  <div id={styles.child_div_1}>
  <div  id={styles.icon} className="icon-mix_icon"> </div>
  </div>
            <div id={styles.text2}>MIX</div></div>
            </Link>
  </Grid.Column>
  <Grid.Column id={styles.col2}>
  <Link to = '/trashlist' id={styles.link}>
  <div id={styles.seg}>
  <div id={styles.child_div_1}>
  <div className="icon-trash_icon"></div>
  </div>
           <div id={styles.text2}>TRASH</div></div>
           </Link>
  </Grid.Column>
</Grid.Row>
  </Grid>

    </div>
    </div>
    </div>
    <Licence
        className="modal"
        show={this.state.isModalShowing}
        close={this.closeModalHandler}>
            Maybe aircrafts fly very high because they don't want to be seen in plane sight?
    </Licence>

    </div>

    <FooterBar></FooterBar>
    </div>
  )
  }
}
