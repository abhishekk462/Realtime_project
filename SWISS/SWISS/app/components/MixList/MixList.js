// @flow
import React, { Component } from 'react';
import { app, BrowserWindow, remote } from 'electron';
import styles from  './MixList.css';
import MenuBar from "../MenuBar/Menubar";
import FooterBar from "../FooterBar";
import TitleBar from "../TitleBar";
import Box3 from "../MixScanList/MixScanList";
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
const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    
    
  ]


export default class MixList extends Component {
  constructor( props ){
    super( props )
    this.state = { 
      show : true ,
      show1 : true,
      show2 : true,
      isCardView: false,

    
    
    }
    
    this.toggleDiv = this.toggleDiv.bind(this)
    this.toggleDiv1 = this.toggleDiv1.bind(this)
    this.toggleDiv2 = this.toggleDiv2.bind(this)
}

toggleDiv = () => {
    const { show } = this.state;
    this.setState( { show : !show } )
}
toggleDiv1 = () => {
  const { show1 } = this.state;
  this.setState( { show1 : !show1 } )
}
toggleDiv2 = () => {
  const { show2 } = this.state;
  this.setState( { show2 : !show2 } )
}
toggleDiv3(){
    alert("called");
  }
    render() {
      return (
       
       
       <div className={styles.container}>
       
       <div >
       <TitleBar/>
       <MenuBar  title="Mix List"/>

      
       <Grid>
    <Grid.Column floated='left' width={5}>

   
    <div>
   <p id={styles.txt1}> Shimamura_342354238.xlxs</p>
   </div>
    </Grid.Column>
    <Grid.Column floated='right'  computer={8} tablet={8}>
    <Form.Field>
    <div id={styles.buttons}>
    
    <Button className={`ui circular button ${styles.swiss_NEEDLENG}`} >NEEDLE NG</Button>
    <Button className={`ui circular button ${styles.swiss_UNDO}`}  >UNDO</Button>
    <Button className={`ui circular button ${styles.swiss_NEXT}`} >NEXT</Button>
 
    </div>
    </Form.Field>
    </Grid.Column>
  </Grid> 


  <div className={styles.container1}>
  <div className={styles.left}>
  <Form id={styles.form}>
<Form.Field>   
  <Dropdown placeholder='DISHANG GROUP CO.LTD.' fluid multiple selection options={options} id={styles.dropdwn} />

<Input id={styles.input} placeholder='A003'/>
<Input id={styles.input} icon ="icon-barcode_icon" iconPosition='left'placeholder='ITEM BARCODE' />
<Checkbox id={styles.checkbox}label='ONE SCAN' /> <span id ={styles.help_icon}className="icon-help_icon"></span>
</Form.Field>
</Form>



  </div>
  <div className={styles.middle}>
  </div>
  <div className= {styles.right}>

  <Grid >
       <Grid.Row >

       <Grid.Column  tablet={15} computer={16} id={styles.rightside}>

<Segment>
    <div>
<h4 id={styles.h4}>SCANNING</h4><span><Icon onClick={ this.toggleDiv } id={styles.opendiv}  name='angle up' /></span>
</div><br />

<div><br />
{ this.state.show && <Box1 /> }
</div>

  </Segment>




<Segment>

  <div>
<h4 id={styles.h4}>SUMMARY</h4><span><Icon onClick={ this.toggleDiv1 } id={styles.opendiv}  name='angle up' /></span>
</div><br/>
<br />
{ this.state.show1 && <Box2 /> }

</Segment>
  <Segment>
    <div>
<h4 id={styles.h4}>SCANNED LIST</h4><span><Icon onClick={ this.toggleDiv2 } id={styles.opendiv}  name='angle up' /></span>
</div><br />

<br />
{ this.state.show2 && <Box3 /> }


  </Segment>
</Grid.Column>

       </Grid.Row>
       </Grid>


  </div>
</div>
      
       <FooterBar/>
       </div>
        </div>
    );
    }
  }

  class Box1 extends Component{
    render(){
        return(
          <div>
          <Grid  id={styles.outergrid}>

<Grid.Column  tablet={2} computer={2}>
BARCODE
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
COLOR
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
SIZE
</Grid.Column>
<Grid.Column tablet={1} computer={1}>
STYLE
</Grid.Column>
<Grid.Column  tablet={1} computer={1}>
PAC
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
SCANNED
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
NEEDLE OK
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
NEEDLE NG
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
ACTION
</Grid.Column>
</Grid>
            <hr id={styles.horizontalline}/> 
            <div >
<Grid id={styles.grid1}>

<Grid.Column  tablet={2} computer={2}>
1
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
A
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
S
</Grid.Column>
<Grid.Column tablet={1} computer={1}>
NEEDLE
</Grid.Column>
<Grid.Column  tablet={1} computer={1}>
1
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
5
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
5/5
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
0
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
5
</Grid.Column>


</Grid>
<hr  id={styles.horizontalline}/> 
<Grid id={styles.grid1}>

<Grid.Column  tablet={2} computer={2}>
2
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
A
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
M
</Grid.Column>
<Grid.Column tablet={1} computer={1}>
NEEDLE
</Grid.Column>
<Grid.Column  tablet={1} computer={1}>
1
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
5
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
5/5
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
0
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
5
</Grid.Column>

</Grid>
<hr  id={styles.horizontalline}/> 
<Grid id={styles.grid1}>

<Grid.Column  tablet={2} computer={2}>
3
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
A
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
L
</Grid.Column>
<Grid.Column tablet={1} computer={1}>
NEEDLE
</Grid.Column>
<Grid.Column  tablet={1} computer={1}>
1
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
5
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
5/5
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
0
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
5
</Grid.Column>

</Grid>
</div>
            </div>

        )
    }
}

class Box2 extends Component{
  render(){
      return(
          <div>

            <Grid id={styles.outergrid} >

<Grid.Column  tablet={2} computer={2}>
STYLE
</Grid.Column>
<Grid.Column  tablet={4} computer={4}>
COLOR
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
SIZE
</Grid.Column>
<Grid.Column tablet={4} computer={4}>
QTY
</Grid.Column>

<Grid.Column  tablet={2} computer={2}>

</Grid.Column>
<Grid.Column  tablet={2} computer={2}>

</Grid.Column>

</Grid>
<hr id={styles.horizontalline}/> 
<Grid >

<Grid.Column  tablet={2} computer={2} id={styles.frstcol}>
NEEDLE
</Grid.Column>
<Grid.Column  tablet={4} computer={4}>
A
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
S
</Grid.Column>
<Grid.Column tablet={4} computer={4}>
10
</Grid.Column>

<Grid.Column  tablet={2} computer={2}>

</Grid.Column>
<Grid.Column  tablet={2} computer={2}>

</Grid.Column>

</Grid>
<hr  id={styles.horizontalline}/> 
<Grid >

<Grid.Column  tablet={2} computer={2}>
NEEDLE
</Grid.Column>
<Grid.Column  tablet={4} computer={4}>
A
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
M
</Grid.Column>
<Grid.Column tablet={4} computer={4}>
10
</Grid.Column>

<Grid.Column  tablet={2} computer={2}>

</Grid.Column>
<Grid.Column  tablet={2} computer={2}>

</Grid.Column>

</Grid>
<hr  id={styles.horizontalline}/> 
<Grid >

<Grid.Column  tablet={2} computer={2}>
NEEDLE
</Grid.Column>
<Grid.Column  tablet={4} computer={4}>
A
</Grid.Column>
<Grid.Column  tablet={2} computer={2}>
L
</Grid.Column>
<Grid.Column tablet={4} computer={4}>
5
</Grid.Column>

<Grid.Column  tablet={2} computer={2}>

</Grid.Column>
<Grid.Column  tablet={2} computer={2}>

</Grid.Column>

</Grid>

<Grid >
<Grid.Column  tablet={2} computer={2}>

</Grid.Column>
<Grid.Column  tablet={4} computer={4}>

</Grid.Column>
<Grid.Column  tablet={2} computer={2}>

</Grid.Column>
<Grid.Column tablet={4} computer={4}>

</Grid.Column>
<Grid.Column  tablet={2} computer={2}>

</Grid.Column>
<Grid.Column  tablet={2} computer={2}>

</Grid.Column>

</Grid>
          </div>
      )
  }
}

