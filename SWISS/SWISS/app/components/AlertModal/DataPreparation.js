import React from 'react';
import styles from "./Modal.css";
import { Link,Switch,Route, BrowserRouter as Router,NavLink} from "react-router-dom";


import {
    Button,
    Form,
    Modal,
    Grid,
    Icon,
    Header,
    Message,
    Label,
    Segment
  } from 'semantic-ui-react';
const modal = (props) => {
    return (
        
        <Modal trigger={ <label className={`left floated column ${styles.pdp_ftitle}`}>
        01-02-19 Sunday
        </label>} closeIcon>
       
       
        <Modal.Actions id={styles.Modelbtn} >
        <Modal.Description>
        <Header>The selected file is not ready for operation.</Header>
        <Header>Click Yes or press Y for data preparation.</Header>
       
      </Modal.Description>
       
         
       
      
        <Form>

       <Link to="/DataPreparation"><Button id={styles.Nobtn} color='green'>Yes</Button> </Link>
         
             
         
          </Form>
        </Modal.Actions>
        
      </Modal>






    )
}

export default modal;
