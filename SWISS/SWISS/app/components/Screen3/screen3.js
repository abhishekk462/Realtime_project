// @flow 
import React, { Component } from "react";
import styles from "./screen3.css";
import TitleBar from "../TitleBar";
import Menubar from "../MenuBar/Menubar";
import ASSORT from "../AssortList/Assortlist";
import MenuBar from "../MenuBar/Menubar";
import Shimamuradata from "../ShimamuraData/Shimamuradata";
import FooterBar from "../FooterBar";
import AssortNext from '../AlertModal/AssortNext.js';
import NeddleNg from '../AlertModal/NeedleNg.js'

// import importconfig from "../../constants/importconfig";

import {
  Button,
  Form,
  Header,
  Grid,
  Message,
  Segment,
  Icon,
  Image,
  Input,
  Dropdown,
  Checkbox,
  Menu ,
} from 'semantic-ui-react';
const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  
  
]

export default class Screen3 extends Component {
  // <Dropdown placeholder='State' search selection options={importconfig} />
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
   
    return (
  
  
    
      <div className={styles.container}>
      <div >
      <TitleBar/>
      <MenuBar title="Assort List"/>
      
  

      <Grid>
   <Grid.Column floated='left' width={5}>
  <p id={styles.txt}> Shimamura_342354238.xlxs</p>
 
   </Grid.Column>
   <Grid.Column floated='right' width={9}>
   <Form.Field>
   <div id={styles.buttons}>
  
  
   <div className="row">
                  <div className="column">
                  <NeddleNg 
                    className="modal"
                    show={this.state.isModalShowing}
                    close={this.closeModalHandler}>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </NeddleNg>
                </div>
                      
                       
                    </div>
  
   <Button className={`ui circular button ${styles.swiss_UNDO}`}  >UNDO</Button>
   <div className="row">
                  <div className="column">
                  <AssortNext 
                    className="modal"
                    show={this.state.isModalShowing}
                    close={this.closeModalHandler}>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </AssortNext>
                </div>
                      
                       
                    </div>
  

   </div>
   </Form.Field>
   </Grid.Column>
   <div className={styles.container1}>
   
  <div className={styles.left}>
  

  <Grid.Column  tablet={4} computer={4} id={styles.left}>
   
  <Segment id={styles.segment}>

     <Form>
<Form.Field> 
     
      <Dropdown placeholder='11-80005' fluid multiple selection options={options} id={styles.dropdwn} />
      <Dropdown placeholder='TOKYO' fluid multiple selection options={options} id={styles.dropdwn} />
      <Dropdown placeholder='9990' fluid multiple selection options={options} id={styles.dropdwn} />
     <Input  icon='icon-carton_icon' size='large' iconPosition='left' placeholder='CARTOON CODE'id={styles.dropdwn} />
      <Input icon='icon-barcode_icon' size='large' iconPosition='left' placeholder='98400000000' id={styles.dropdwn} />
      <Checkbox id={styles.checkbox}label='ONE SCAN' id={styles.checkbox} /><br/><br/>
      <Checkbox id={styles.checkbox}label='HIDE COMPLETED' id={styles.checkbox}/>
     
   </Form.Field>
   </Form>

</Segment>
</Grid.Column>


  </div>
 
  <div className={styles.middle}>
  </div>

  <div className= {styles.right}>
  <Grid.Column  tablet={12} computer={12} id={styles.rightside}>

 
  <Segment id={styles.segment}>
         <div>
<h4 id={styles.h4}>SCANNING</h4>
</div><br />

<br />

<Grid id={styles.grid1}>
     
     <Grid.Column  tablet={2} computer={2}>
   BARCODE
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
   COLOR
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
    SIZE
     </Grid.Column>
     <Grid.Column tablet={2} computer={2}>
  PCS
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
     PAC
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
     SCANNED
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
     NEEDLE OK
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
  NEEDLE NG
     </Grid.Column>
   
    
    
   
   </Grid>
<hr id={styles.horizontalline}/> 
   <div >
   <Grid id={styles.grid1}>
     
   <Grid.Column  tablet={2} computer={2}>
     01
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
     RED
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
     M
     </Grid.Column>
     <Grid.Column tablet={2} computer={2}>
      2
     </Grid.Column>
     <Grid.Column  tablet={1} computer={1}>
      1
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
     
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
   
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
  
     </Grid.Column>
   
    
   
   </Grid>
   <hr  id={styles.horizontalline}/> 
   <Grid id={styles.grid1}>
     
   <Grid.Column  tablet={2} computer={2}>
     02
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
     RED
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
     M
     </Grid.Column>
     <Grid.Column tablet={2} computer={2}>
     2
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
      1 
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
     
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
     
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
  
     </Grid.Column>
     
   
   </Grid>
   <hr  id={styles.horizontalline}/> 
   <Grid id={styles.grid1}>
     
   <Grid.Column  tablet={2} computer={2}>
     03
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
      RED
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
       M
     </Grid.Column>
     <Grid.Column tablet={2} computer={2}>
        2
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
        1
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
     
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>
     
     </Grid.Column>
     <Grid.Column  tablet={2} computer={2}>

     </Grid.Column>
   
   
   </Grid>
   </div>


       </Segment>
       </Grid.Column>
  </div>
  </div>
 </Grid> 

    
     
      <FooterBar/>
      </div>
       </div>
  )
  }
}
