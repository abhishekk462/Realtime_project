// @flow
import React, { Component } from 'react';
import { app, BrowserWindow, remote } from 'electron';
import styles from  './DownloadPage.css';
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
  Table,
  Item
} from 'semantic-ui-react';



export default class DownloadData extends Component {
   
    render() {
      return (
       
       
       <div className={styles.container}>
       <div>
          <TitleBar/>
          <MenuBar  title="Download"/>
      <div id={styles.topgrid}> {/* download div start */} 
        
         <Grid>
            <Grid.Column floated='left' width={5} className={styles.swiss_shimamura}>
            <Item.Content>
               <Item.Header as='a' className={styles.swiss_downloadHead}>Shimamura_80170.xls</Item.Header>
               <Item.Meta>
                   <span className={styles.swiss_date1}>DATE:<span className={styles.swiss_dateColor}>01/02/2019</span></span> 
                   <span className={styles.swiss_style1}>STYLE:<span className={styles.swiss_dateColor}>51-70182</span></span>
              </Item.Meta>    
            </Item.Content>
            </Grid.Column>
            <Grid.Column floated='right' width={5} className={styles.swiss_shimamura}>
            <Button className={`ui circular button ${styles.swiss_NEXT}`} >DOWNLOAD</Button>
            </Grid.Column>
         </Grid>
         
          
      </div>  {/* download div close */}

    
  {/* First table section start */}
    <section  className={styles.section} >
        <Form className={styles.swiss_form} >
            <Table basic='very' className={styles.swiss_settings_table}>
                
     <Table.Header className={styles.swiss_tableHead}>
        <Table.Row>
            <Table.HeaderCell>COLOR</Table.HeaderCell>
            <Table.HeaderCell>SIZE</Table.HeaderCell>
            <Table.HeaderCell width={4}>PRODUCTION</Table.HeaderCell>
            <Table.HeaderCell>DETECTED</Table.HeaderCell>
            <Table.HeaderCell>PASSED</Table.HeaderCell>
        </Table.Row>
     </Table.Header>
                
    <Table.Body className={styles.swiss_tableBody}>
      <Table.Row className={styles.swiss_columcell}>
        <Table.Cell>Red</Table.Cell>
        <Table.Cell>M</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>0</Table.Cell>
        <Table.Cell>10</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>Green</Table.Cell>
        <Table.Cell>L</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>0</Table.Cell>
        <Table.Cell>10</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>Blue</Table.Cell>
        <Table.Cell>S</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>0</Table.Cell>
        <Table.Cell>10</Table.Cell>
      </Table.Row>
                </Table.Body>
            </Table>
        </Form>
    </section>
{/* First table section end  */}

{/* secod table section */}

    <Item.Content className={styles.swiss_secondTable}>
        <Item.Meta>
          <span className={styles.swiss_date1}>DATE:<span className={styles.swiss_dateColor}>01/02/2019</span></span> 
         <span className={styles.swiss_style1}>STYLE:<span className={styles.swiss_dateColor}>51-70182</span></span>
       </Item.Meta>    
  </Item.Content>
 <section  className={styles.section} >
      <Form className={styles.swiss_form} >
        <Table basic='very' className={styles.swiss_settings_table}>      
            <Table.Header className={styles.swiss_tableHead}>
                <Table.Row>
                    <Table.HeaderCell>COLOR</Table.HeaderCell>
                    <Table.HeaderCell>SIZE</Table.HeaderCell>
                    <Table.HeaderCell width={4}>PRODUCTION</Table.HeaderCell>
                    <Table.HeaderCell>DETECTED</Table.HeaderCell>
                    <Table.HeaderCell>PASSED</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
                        
            <Table.Body className={styles.swiss_tableBody}>
            <Table.Row>
                <Table.Cell>Red</Table.Cell>
                <Table.Cell>M</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>10</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>Green</Table.Cell>
                <Table.Cell>L</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>10</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>Blue</Table.Cell>
                <Table.Cell>S</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>10</Table.Cell>
            </Table.Row>
                </Table.Body>
            </Table>
        </Form>
     </section> {/* second table section end */}
       <FooterBar/>
       </div>
        </div>
    );
    }
  }