// @flow
import React, { Component } from "react";
import styles from "./Settingpage.css";
import TitleBar from "../TitleBar";
import { Link,Switch,Route} from "react-router-dom";
import Modal from '../AlertModal/Modal.js';
import MenuBar from "../MenuBar/Menubar";
import FooterBar from "../FooterBar";
import Barcoderead from './barcodeImg.png';



import {
  Button,
  Form,
  Header,
  Grid,
  Message,
  Segment,
  Icon,
  Image,
  Label,
  Input,
  Table

} from 'semantic-ui-react';



export default class ASSORT extends Component {
    constructor(props) {
        super(props)
        this.state = {
            files: [],
            showUploadLable:true,
            showFiles:true,
            setting:'Settings'

        }


 }



  render() {

    return (
  <div>
      <TitleBar />
      <MenuBar  title="Settings"/>

       <div className={styles.container}>

      <div className="glyph fs1" className = {styles.swiss_assortsec}>

         </div>


         <section  className={styles.section} >
         <Form className={styles.swiss_form} >
 <Table basic='very' className={styles.swiss_settings_table}>

   <Table.Body className={styles.swiss_tableBody}>
     <Table.Row>
       <Table.Cell >

          <Input   icon='icon-barcode_icon' iconPosition='left' placeholder='779997799977999' className={styles.swiss_barcodealign} />
       </Table.Cell>
       <Table.Cell>
           <i className = {`icon play circle outline ${styles.swiss_bluePlay}`} ></i>
           <Label className={styles.swiss_trionLabel}>Tri-ton</Label>
     </Table.Cell>
       <Table.Cell>
           <i className = {`icon play circle outline ${styles.swiss_redPlay}`}></i>
           <Label className={styles.swiss_trionLabel}>Swoosh</Label>
       </Table.Cell>
       <Table.Cell>
       <i className ={`icon stop ${styles.swiss_stopBlue}`}></i>
       <Label className={styles.swiss_trionLabel}>Blue</Label>
       </Table.Cell>
       <Table.Cell>
          <i className ={`icon-scanner_icon ${styles.swiss_filterBtn}`} ></i>
       </Table.Cell>
         <Table.Cell className={styles.swiss_clearAlign}>
         <Button className={`ui circular button ${styles.swiss_clearBtn}`}>CLEAR</Button>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell width={4}>
          <Input   icon='icon-barcode_icon' iconPosition='left' placeholder='779997799977999' className={styles.swiss_barcodealign} />
       </Table.Cell>
       <Table.Cell>
       <i className = {`icon play circle outline ${styles.swiss_bluePlay}`} ></i>
       <Label className={styles.swiss_trionLabel}>Chord</Label>
     </Table.Cell>
       <Table.Cell>
       <i className = {`icon play circle outline ${styles.swiss_redPlay}`}></i>
       <Label className={styles.swiss_trionLabel}>Old Bell</Label>
       </Table.Cell>
       <Table.Cell>
       <i className ={`icon stop ${styles.swiss_stopGreen}`}></i>
       <Label className={styles.swiss_trionLabel}>Green</Label>
       </Table.Cell>
       <Table.Cell>
        <i className ={`icon-scanner_icon ${styles.swiss_filterBtn}`} ></i>
       </Table.Cell>
         <Table.Cell className={styles.swiss_clearAlign}>
         <Button className={`ui circular button ${styles.swiss_clearBtn}`}>CLEAR</Button>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>
            <Input   icon='icon-barcode_icon' iconPosition='left' placeholder='779997799977999' className={styles.swiss_barcodealign} />
       </Table.Cell>
       <Table.Cell>
       <i className = {`icon play circle outline ${styles.swiss_bluePlay}`} ></i>
       <Label className={styles.swiss_trionLabel}>Analog Watch</Label>
     </Table.Cell>
       <Table.Cell>
       <i className = {`icon play circle outline ${styles.swiss_redPlay}`}></i>
       <Label className={styles.swiss_trionLabel}>Circuit</Label>
       </Table.Cell>
       <Table.Cell>
       <i className ={`icon stop ${styles.swiss_stopYellow}`}></i>
       <Label className={styles.swiss_trionLabel}>Yellow</Label>
       </Table.Cell>
       <Table.Cell>
          <i className ={`icon-scanner_icon ${styles.swiss_sacnnerIcon}`} ></i>
       </Table.Cell>
       <Table.Cell className={styles.swiss_clearAlign}>
        <Button className={`ui circular button ${styles.swiss_clearBtn}`}>CLEAR</Button>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>
          <Input  icon='icon-barcode_icon' iconPosition='left' placeholder='779997799977999' className={styles.swiss_barcodealign} />
       </Table.Cell>
       <Table.Cell>
         <i className = {`icon play circle outline ${styles.swiss_bluePlay}`} ></i>
         <Label className={styles.swiss_trionLabel}>Radar</Label>
     </Table.Cell>
       <Table.Cell>
       <i className = {`icon play circle outline ${styles.swiss_redPlay}`}></i>
       <Label className={styles.swiss_trionLabel}>Radiate</Label>
       </Table.Cell>
       <Table.Cell>
       <i className ={`icon stop ${styles.swiss_stopBrown}`}></i>
       <Label className={styles.swiss_trionLabel}>Brown</Label>
       </Table.Cell>
       <Table.Cell>
             <i className ={`icon-scanner_icon ${styles.swiss_filterBtn}`} ></i>
       </Table.Cell>
         <Table.Cell className={styles.swiss_clearAlign}>
        <Button className={`ui circular button ${styles.swiss_saveBtn}`}>SAVE</Button>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>
            <Input   icon='icon-barcode_icon' iconPosition='left' placeholder='ENTER BARCODE' className={styles.swiss_barcodealign} />
       </Table.Cell>
       <Table.Cell>
       <i className = {`icon play circle outline ${styles.swiss_bluePlay}`} ></i>
       <Label className={styles.swiss_trionLabel}>Alarm</Label>
     </Table.Cell>
       <Table.Cell>
       <i className = {`icon play circle outline ${styles.swiss_redPlay}`}></i>
       <Label className={styles.swiss_trionLabel}>Bell</Label>
       </Table.Cell>
       <Table.Cell>
       <i className ={`icon stop ${styles.swiss_stopBlue}`}></i>
       <Label className={styles.swiss_trionLabel}>Blue</Label>
       </Table.Cell>
       <Table.Cell>
         <i className ={`icon-scanner_icon ${styles.swiss_scanner}`}></i>
       </Table.Cell>
       <Table.Cell className={styles.swiss_clearAlign}>
         <Button className={`ui circular button ${styles.swiss_save1Btn}`}>SAVE</Button>
       </Table.Cell>
     </Table.Row>
   </Table.Body>
        </Table>
</Form>

        {/* form 2 ==========*/}
        <Form className={styles.swiss_form} >
        <Grid columns={2}>
    <Grid.Row stretched className ={styles.swiss_errorcolor}>
      <Grid.Column width={11} className={styles.swiss_form2}>

        <Segment>
        <div className={styles.swiss_printIcon}><Icon name='print' /></div>
        <Grid columns={2}>
        <Grid.Column className={styles.swiss_grid_error_release}>

            <div className={styles.swiss_scannerID}>ERROR RELEASE SCANNER ID</div>
            <div className={styles.swiss_inputBox}>
            <Input icon='icon-barcode_icon' size='large' iconPosition='left' placeholder='98400000000' />
            </div>
            <div className={styles.swiss_changeBtn}>
            <Button className={`ui circular button ${styles.swiss_changsizeBtn}`}  color='green'>CHANGE</Button>
            </div>
            </Grid.Column>
            <Grid.Column>
            <img  src={Barcoderead} alt="barcode" />
            </Grid.Column>
      </Grid>
        </Segment>
      </Grid.Column>

      <Grid.Column width={5}>


        <Segment className={styles.swiss_piano}>

            <i className = {`icon play circle outline ${styles.swiss_pianoSec}`}></i>
            <div id={styles.swiss_pack}>
            <Label  className={styles.swiss_package}>Package completion</Label><br/>
            <Label className={styles.swiss_pianosection}>Piano</Label></div>
        </Segment>
        <Segment className={styles.swiss_piano}>
             <i className = {`icon play circle outline ${styles.swiss_pianoSec}`} ></i>
            <div id={styles.swiss_pack}>
          <Label  className={styles.swiss_package}>Carton completion</Label><br/>
            <Label className={styles.swiss_pianosection}>Bell Tower</Label></div>
            </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Form>

</section>
    {/* form 2 end */}





       </div>
       <FooterBar/>
    </div>

   )
  }
}