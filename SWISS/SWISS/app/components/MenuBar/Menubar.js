// @flow 
import React, { Component } from "react";
import styles from "./Menubar.css";
import TitleBar from "../TitleBar";
import {Link} from "react-router-dom";
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
  Dropdown,
  Checkbox,
  Menu ,
} from 'semantic-ui-react';





export default class Menubar extends Component {
   constructor(props){
      super(props)
    this.state = { activeItem: 'ASSORT', 
             label:"Assort List"}
   }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
   
    return (
<div>
   <Segment inverted id={styles.menusec}>
        <Menu inverted secondary id={styles.secondary} >
        <Link to = '/' className={styles.swiss_backIcon}>
                <i id={styles.arrow}className="icon angle left"></i></Link>
        <div className={styles.pdp_assort}>{this.props.title} </div>

          
       
         <Menu.Item as={Link} to='/assort/assortlist'
          position='right'
           name='ASSORT' 
           id={styles.item}
           active={activeItem === 'ASSORT'}
            onClick={this.handleItemClick}
             />
          
          
            <Menu.Item as={Link} to='/solidlist'
            name='SOLID'
            id={styles.item}
            active={activeItem === 'SOLID'}
            onClick={this.handleItemClick}
          />
         
           
             <Menu.Item as={Link} to='/MixList'
            name='MIX'
            id={styles.item}
            active={activeItem === 'MIX'}
            onClick={this.handleItemClick}
          />
         
          
           <Menu.Item as={Link} to='/trashlist'
            name='TRASH'
            id={styles.item}
            active={activeItem === 'TRASH'}
            onClick={this.handleItemClick}
          />
        
        </Menu>
      </Segment>
      </div>

   
  )
  }
}
