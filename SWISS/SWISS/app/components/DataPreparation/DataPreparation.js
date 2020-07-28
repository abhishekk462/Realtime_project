// @flow
import React, { Component } from 'react';
import { app, BrowserWindow, remote } from 'electron';
import styles from  './DataPreparation.css';
import MenuBar from "../MenuBar/Menubar";
import FooterBar from "../FooterBar";
import TitleBar from "../TitleBar";
import { Form } from 'semantic-ui-react';
import { Link,Switch,Route, BrowserRouter as Router,NavLink} from "react-router-dom";
import {
  Button,
  Label,
  Header,
  Grid,
  Message,
  Segment,
  Icon,
  Image,
  Dropdown,
  Input,
  Checkbox,
} from 'semantic-ui-react';



export default class DataPreparation extends Component {
   
    render() {
      return (
       
       
       <div className={styles.container}>
       <div >
       <TitleBar/>
       <MenuBar  title="Data Preparation"/>
      <div id={styles.topgrid}> 
       <Grid>
    <Grid.Column floated='left' width={5}>
    <div className={styles.swiss_inputBox}><Input icon='icon-barcode_icon' size='large' iconPosition='left' placeholder='98400000000' /></div>
   
      
    </Grid.Column>
    <Grid.Column floated='right' width={5}>
    
    <Link to ="/solidscanlist"><Button className={`ui circular button ${styles.swiss_NEXT}`} >SAVE</Button></Link>
    
    </Grid.Column>
  </Grid>
  </div>

  <div id={styles.outergrid}>
       <Grid id={styles.grid1}>
      
      <Grid.Column  tablet={4} computer={4}>
   BARCODE
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
     StyleNo
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
     COLOR
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
     SIZE
      </Grid.Column>
     
    
    </Grid>
 <hr id={styles.horizontalline}/> 
    <Grid id={styles.grid}>
      
      <Grid.Column  tablet={4} computer={4} id={styles.frstcol}>
     77777
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
     51-70812
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
   Red
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
     s
      </Grid.Column>
  
    </Grid>
    <hr  id={styles.horizontalline}/> 
    <Grid id={styles.grid}>
      
      <Grid.Column  tablet={4} computer={4}>
      77777
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      51-70812
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      Green
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
      xl
      </Grid.Column>

    
    
    </Grid>
    <hr  id={styles.horizontalline}/> 
    <Grid id={styles.grid}>
      
      <Grid.Column  tablet={4} computer={4}>
      77777
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      51-70812
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
       Yellow
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
        m
      </Grid.Column>
    
    </Grid>
    <hr  id={styles.horizontalline}/> 
    <Grid id={styles.grid}>
      <Grid.Column  tablet={4} computer={4}>
      77777
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      51-70812
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
       Red
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
       xxxl
      </Grid.Column>
     
    
    </Grid>
    <hr  id={styles.horizontalline}/> 
    <Grid id={styles.grid}>
      
      <Grid.Column  tablet={4} computer={4}>
      77777
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      51-70812
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      Blue
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
        m
      </Grid.Column>
     
     
    
    </Grid>
    <hr  id={styles.horizontalline}/> 
    <Grid id={styles.grid}>
      <Grid.Column  tablet={4} computer={4}>
      77777
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      51-70812
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
       Black
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
      l
      </Grid.Column>
   
    
    </Grid>
     <hr  id={styles.horizontalline}/>  
    <Grid id={styles.grid}>
      
      <Grid.Column  tablet={4} computer={4}>
      77777
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      51-70812
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      Black
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
       m
      </Grid.Column>
     
     
    
    </Grid>
   
    </div>




       <FooterBar/>
       </div>
        </div>
    );
    }
  }