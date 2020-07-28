import React from 'react';
import {Form, Modal, Row, Col, ListGroup,ListGroupItem, Button, FormControl, FormGroup, InputGroup, Well, MenuItem,SplitButton } from 'react-bootstrap';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';


class EditDropdown extends React.PureComponent{

  constructor(props) {
    super(props);

    this.state = {showModal : props.show};
    this.close = this.props.close

    this.state={};
  }

  componentWillMount(){
   // console.log('this is going to be mounted');
    //this.setState({ options: this.props.parameters });
  }

  handleChange(e){
    this.setState({ value: e.target.value });
  }


  render(){

  //console.log('the fieldId is', this.props.parameters);


    let listItems = (<div></div>);
    if(this.props.parameters) {
       listItems = this.props.parameters.map((option) => {
        return (
          <ListGroupItem key={"option-" + option.id}>

            {option.label}

            <div className="pull-right">
              <em className="fa fa-remove" onClick={this.props.removeCurrentItem.bind(this, option)}/>
            </div>

          </ListGroupItem>);
      });
    }

    return(
      <div className="static-modal">
        <Modal show={this.props.show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Dropdown Values</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Row>
              <Col lg={12}>
            <Form inline>
            <FormControl style={{width: "90%"}} type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange.bind(this)} />
              <Button type="button" onClick={this.props.addCurrentItem.bind(this,this.state.value)}>
                Add
              </Button>

              </Form>
                </Col>
              </Row>

            <Row className="mt-lg">
              <Col lg={12}>

              <ListGroup>
                {listItems}
              </ListGroup>

             </Col>
             </Row>



          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

}


EditDropdown.propTypes = {
  data : React.PropTypes.object
};

export default EditDropdown;
