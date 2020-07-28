import React, { Component } from 'react';
import { app, BrowserWindow, remote } from 'electron';
import styles from  '../MixList/MixList.css';
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


export default class Box4 extends Component{
  
    constructor( props ){
        super( props )
        this.state = { showplus : false};

        this.toggleDivplus = this.toggleDivplus.bind(this)
    }

    toggleDivplus = () => {
        alert("minus called");
        const { showplus } = this.state;
        this.setState( { showplus : !showplus } )
    }

    render(){
        return( 
           
           <Grid>
            <Grid.Column  tablet={3} computer={3}>
 
  </Grid.Column>
  <Grid.Column  tablet={2} computer={2}>
  A
  </Grid.Column>
  <Grid.Column  tablet={2} computer={2}>
 S
  </Grid.Column>
  <Grid.Column tablet={2} computer={2}>
 NEEDLE
  </Grid.Column>
  
  <Grid.Column  tablet={2} computer={2}>
  10
  </Grid.Column>
  <Grid.Column  tablet={2} computer={2}>
  
  </Grid.Column>
  <Grid.Column  tablet={1} computer={1}>
  
  </Grid.Column>
  
  <Grid.Column  tablet={1} computer={1}>
{/* <span  id={styles.minus} className="icon-minimize_icon"  onClick={ this.toggleDivplus }></span> */}
</Grid.Column>
  </Grid>
           
            
        )
    }
}