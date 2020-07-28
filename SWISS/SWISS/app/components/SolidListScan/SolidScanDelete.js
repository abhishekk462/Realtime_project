import React, { Component } from 'react';
import { app, BrowserWindow, remote } from 'electron';
import styles from  '../MixList/MixList.css';
import Box4 from '../AddDivPlus/AddScanDelete'




import { Form } from 'semantic-ui-react'
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


export default class Box5 extends Component{
        constructor( props ){
                super( props )
                this.state = { showplus : true};
        
                // this.toggleDivplus = this.toggleDivplus.bind(this)
            }
        
            handleClick = () => {
                const { showplus } = this.state;
                this.setState( { showplus : !showplus } )
        
            }
        
        render(){
                const classname = this.state.showplus ? "icon-trash_icon24" : "icon-add_icon";
            return(
                <div>
                  <Grid id={styles.outergrid}>
      
      <Grid.Column  tablet={3} computer={3}>
      CARTOON CODE
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      COLOR
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      SIZE
      </Grid.Column>
      <Grid.Column tablet={2} computer={2}>
      STYLE
      </Grid.Column>
      
      <Grid.Column  tablet={2} computer={2}>
      PAC
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      
      </Grid.Column>
      <Grid.Column  tablet={1} computer={1}>
      
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      DETAIL
      </Grid.Column>
      
      
      </Grid>
      <hr id={styles.horizontalline}/> 
      <Grid >
      
      <Grid.Column  tablet={3} computer={3}>
      A000
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      A
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      M
      </Grid.Column>
      <Grid.Column tablet={2} computer={2}>
      STYLE
      </Grid.Column>
      
      <Grid.Column  tablet={2} computer={2}>
      10
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      
      </Grid.Column>
      <Grid.Column  tablet={1} computer={1}>
      
      </Grid.Column>
      <Grid.Column  tablet={2} computer={2}>
      <span  onClick={this.handleClick}    className={`${styles.minus} ${classname}`}></span>
      </Grid.Column>
      
      
      </Grid>
  
   { this.state.showplus &&  <Box4 /> }
      
      
      
                </div>
            )
        }
      }
      