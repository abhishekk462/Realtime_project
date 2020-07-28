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
        
        <Modal trigger={ <Button className={`ui circular button ${styles.swiss_NEXT}`} >NEXT</Button> } closeIcon>
       
       
        <Modal.Actions id={styles.Modelbtn} >
        <Header id={styles.header}
         
         content='Carton is ready to save.
                   Click Yes or press Y for data preparation.'
          />
      
        <Form>

       <Button id={styles.Nobtn} color='green'>Yes</Button>
         
             
         
          </Form>
        </Modal.Actions>
        
      </Modal>






    )
}

export default modal;
