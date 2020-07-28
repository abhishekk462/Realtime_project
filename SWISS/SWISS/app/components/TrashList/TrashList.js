// @flow
import React, { Component } from 'react';
import { app, BrowserWindow, remote } from 'electron';
import styles from  './TrashList.css';
import MenuBar from "../MenuBar/Menubar";
import FooterBar from "../FooterBar";
import TitleBar from "../TitleBar";
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

export default class TrashList extends Component {
   
    render() {
      return (
        <div className={styles.container}>
       <TitleBar/>
       <MenuBar title="Trash"/>
<div id={styles.outergrid}>
       <Grid id={styles.grid1}>
      
      <Grid.Column  tablet={2} computer={2}>
     NO
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
     FILE NAME
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
     TYPE
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
     DATE
      </Grid.Column>
     
      <Grid.Column  tablet={2} computer={2}>
     RESTORE
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      DELETE
      </Grid.Column>
    
    </Grid>
 <hr id={styles.horizontalline}/> 
    <Grid id={styles.grid}>
      
      <Grid.Column  tablet={2} computer={2} id={styles.frstcol}>
     01
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
     Shimamura_201901222.csv
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      ASSORT
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
      2019-02-22 07:18
      </Grid.Column>
     
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-restore_icon"></div>
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-trash_icon"></div>
      </Grid.Column>
    
    </Grid>
    <hr  id={styles.horizontalline}/> 
    <Grid id={styles.grid}>
      
      <Grid.Column  tablet={2} computer={2}>
    02
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      Shimamura_201901222.csv
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
     SOLID/MIX
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
      2019-02-22 07:18
      </Grid.Column>
     
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-restore_icon"></div>
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-trash_icon"></div>
      </Grid.Column>
    
    </Grid>
    <hr  id={styles.horizontalline}/> 
    <Grid id={styles.grid}>
      
      <Grid.Column  tablet={2} computer={2}>
     03
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      Shimamura_201901222.csv
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
     SOLID
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
      2019-02-22 07:18
      </Grid.Column>
     
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-restore_icon"></div>
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-trash_icon"></div>
      </Grid.Column>
    
    </Grid>
    <hr  id={styles.horizontalline}/> 
    <Grid id={styles.grid}>
      <Grid.Column  tablet={2} computer={2}>
  04
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      Shimamura_201901222.csv
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
     ASSORT
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
      2019-02-22 07:18
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-restore_icon"></div>
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-trash_icon"></div>
      </Grid.Column>
    
    </Grid>
    <hr  id={styles.horizontalline}/> 
    <Grid id={styles.grid}>
      
      <Grid.Column  tablet={2} computer={2}>
     03
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      Shimamura_201901222.csv
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
     SOLID
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
      2019-02-22 07:18
      </Grid.Column>
     
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-restore_icon"></div>
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-trash_icon"></div>
      </Grid.Column>
    
    </Grid>
    <hr  id={styles.horizontalline}/> 
    <Grid id={styles.grid}>
      <Grid.Column  tablet={2} computer={2}>
 05
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      Shimamura_201901222.csv
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      SOLID
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
      2019-02-22 07:18
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-restore_icon"></div>
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-trash_icon"></div>
      </Grid.Column>
    
    </Grid>
    {/* <hr  id={styles.horizontalline}/>  */}
    <Grid id={styles.grid}>
      
      <Grid.Column  tablet={2} computer={2}>
   06
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      Shimamura_201901222.csv
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      SOLID
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
      2019-02-22 07:18
      </Grid.Column>
     
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-restore_icon"></div>
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-trash_icon"></div>
      </Grid.Column>
    
    </Grid>
    {/* <hr  id={styles.horizontalline}/>  */}
    <Grid id={styles.grid}>
      <Grid.Column  tablet={2} computer={2}>
 07
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      Shimamura_201901222.csv
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      SOLID
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
      2019-02-22 07:18
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-restore_icon"></div>
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-trash_icon"></div>
      </Grid.Column>
    
    </Grid>
    {/* <hr  id={styles.horizontalline}/>  */}
    <Grid id={styles.grid}>
      
      <Grid.Column  tablet={2} computer={2}>
    08
      </Grid.Column>
      <Grid.Column  tablet={4} computer={4}>
      Shimamura_201901222.csv
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      SOLID
      </Grid.Column>
      <Grid.Column tablet={4} computer={4}>
      2019-02-22 07:18
      </Grid.Column>
     
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-restore_icon"></div>
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <div className="icon-trash_icon"></div>
      </Grid.Column>
    
    </Grid>
 
   
    </div>
   
    
       <FooterBar/>
        </div>
    );
    }
  }