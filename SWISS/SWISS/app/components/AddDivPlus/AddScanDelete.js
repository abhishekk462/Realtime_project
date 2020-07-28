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
           
           
        <Grid id={styles.specialcol}>
             
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
                5
                </Grid.Column>
                <Grid.Column  tablet={2} computer={2}>
                
                </Grid.Column>
                <Grid.Column  tablet={1} computer={1}>
                
                </Grid.Column>
                <Grid.Column  tablet={2} computer={2}>
                <Button className={`ui circular button ${styles.swiss_NEEDLENG}`} >Delete</Button>
                </Grid.Column>
            </Grid>
           
            
        )
    }
}