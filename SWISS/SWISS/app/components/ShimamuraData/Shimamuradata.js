// @flow 
import React, { Component } from "react";
import styles from './Shimamuradata.css'
import TitleBar from "../TitleBar";
import MenuBar from "../MenuBar/Menubar"
import {
  Button,
  Form,
  Header,
  Grid,
  Message,
  Segment,
  Icon,
  Image,
  Menu ,
  Label
} from 'semantic-ui-react';


export default class Shimamuradata extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    
    return (
      <div id={styles.menuitem}>
     
      <Grid doubling columns={8}>
      <Menu pointing secondary >
    <Grid.Column>
    <Menu.Item id={styles.item1}
            name='BARCODE'
            active={activeItem === 'BARCODE'}
            onClick={this.handleItemClick}
          />
    </Grid.Column>
    <Grid.Column>
    <Menu.Item  id={styles.item2}
            name='COLOR'
            active={activeItem === 'COLOR'}
            onClick={this.handleItemClick}
          />
    </Grid.Column>
    <Grid.Column>
    <Menu.Item id={styles.item2}
            name='SIZE'
            active={activeItem === 'SIZE'}
            onClick={this.handleItemClick}
          />
    </Grid.Column>
    <Grid.Column>
    <Menu.Item id={styles.item2}
            name='PCS'
            active={activeItem === 'PCS'}
            onClick={this.handleItemClick}
          />
    </Grid.Column>
    <Grid.Column>
    <Menu.Item id={styles.item2}
            name='PAC'
            active={activeItem === 'PAC'}
            onClick={this.handleItemClick}
          />
    </Grid.Column>
     <Grid.Column>
     <Menu.Item id={styles.item2}
            name='SCANNED'
            active={activeItem === 'SCANNED'}
            onClick={this.handleItemClick}
          />
    </Grid.Column>
     <Grid.Column>
     <Menu.Item id={styles.item2}
            name='NEEDLE OK'
            active={activeItem === 'NEEDLE OK'}
            onClick={this.handleItemClick}
          />
    </Grid.Column>
     <Grid.Column>
     <Menu.Item 
            name='NEEDLE NG'
            active={activeItem === 'NEEDLE NG'}
            onClick={this.handleItemClick}
          />
         
    </Grid.Column>
      
    </Menu>
  </Grid>
      </div>
     
  )
  }
}
