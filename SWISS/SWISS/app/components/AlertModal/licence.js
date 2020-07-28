import React from 'react';
import styles from "./Modal.css";

import {
    Button,
    Form,
    Modal,
    Grid,
    Icon,
    Header,
    Message,
    Label,
    Segment,
  } from 'semantic-ui-react';
const modal = (props) => {
    return (
        
        <Modal trigger={ <Label id={styles.foottext}>This product is using license,that is due to expire on 15th Dec, 2019  </Label> } closeIcon>
       
       
        <Modal.Actions id={styles.Modelbtn}>
        <Header id={styles.header}  />
        <Form>
    <Form.Field>
      <Form.Input label='Email' placeholder='joe@schmoe.com' />
    </Form.Field>
    <Form.Field>
      <label>Key</label>
      <input placeholder='Key' />
    </Form.Field>

 
  

     

          <Button  id={styles.Nobtn} color='red'>Request Key
          
          </Button>
          <Button   id={styles.Nobtn} color='green'> &nbsp; Activate  &nbsp;
           
          </Button>
          </Form>
        </Modal.Actions>
        
      </Modal>






    )
}

export default modal;
