import React from 'react';
import {Image,OverlayTrigger,Tooltip, Modal, Row, Col,ControlLabel, ListGroup,ListGroupItem, Button, FormControl, FormGroup, InputGroup, Well, MenuItem,SplitButton } from 'react-bootstrap';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';
import Masonry from 'react-masonry-component';
import * as ELM_TYPES from 'components/FormElement/ElementTypes';
import styles from './new-field-style.css';

//import { Field } from 'redux-form'
import { Field,reduxForm } from 'redux-form/immutable';


import FormElementType from './FormElementType';

class NewField extends React.Component{

  constructor(props) {
    super(props);

    this.state = {showModal : props.show, selectedElementType:''};
    this.close = this.props.close


  }

  componentWillMount(){
    console.log('this is going to be mounted');
    //this.setState({ options: this.props.parameters });
  }

  handleChange(e){
    this.setState({ value: e.target.value });
  }



  handleElementTypeSelect(element){
    console.log('element is selected', element);
    console.log('fields are', this.state);
   // tags.addField({name:'elementType', value:element})

   this.setState({selectedElementType:element});

   this.props.dispatch({
     type: '@@redux-form/CHANGE',
     meta: {
       form: 'newFieldAdd',
       field: 'elementType',
       touch: true,
       persistentSubmitErrors: false
     },
     payload: element
   });
  }




  render(){

 //

    const { isFetching, pristine, submitting, handleSubmit } = this.props;
    let elementTypes = Object.values(ELM_TYPES);
    let that = this;


    elementTypes = elementTypes.sort();
    //console.log('the fieldId is', elementTypes);

    let fieldTypes = elementTypes.map(function(element,index){
      return (
      <FormElementType key={'elem-'+index} element={element}
                       selectedElementType={that.state.selectedElementType}

                       onClick={that.handleElementTypeSelect.bind(that,element)}/>

      );
    });


    let masonryOptions = {
      transitionDuration: 0
    };

    const renderMonson = ({input, label, type, meta: {touched, error, warning}}) => (
      <div>

        <Masonry {...input} type={type}

          elementType={'div'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          value={this.state.selectedElementType}
        >
          {fieldTypes}
        </Masonry>

      </div>
    );



  //  console.log(TEXT_IMG);


    return(
      <form onSubmit={handleSubmit}>
      <div className="static-modal">
        <Modal show={this.props.show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Field</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Row>
              <Col lg={12}>

                  <FormGroup >
                    <Col componentClass={ControlLabel} sm={2}>
                      Name
                    </Col>
                    <Col sm={10}>

                      <Field name="fname" className="form-control" component='input'  placeholder="Field Name"/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="Type">
                    <Col componentClass={ControlLabel} sm={2}>
                      Type
                    </Col>
                    <Col sm={10}>

                      <Field name="elementType" component={renderMonson} />


                    </Col>
                  </FormGroup>

                  {/*<FormGroup controlId="Type">*/}
                    {/*<Col componentClass={ControlLabel} sm={2}>*/}
                      {/*Length*/}
                    {/*</Col>*/}
                    {/*<Col sm={5}>*/}
                      {/*<FormControl type="number" placeholder="Min" />*/}
                    {/*</Col>*/}
                    {/*<Col sm={5}>*/}
                      {/*<FormControl type="number" placeholder="Max" />*/}
                    {/*</Col>*/}
                  {/*</FormGroup>*/}


                </Col>
              </Row>



          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" type="button" onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
        </form>
    );
  }

}


NewField.propTypes = {
  data : React.PropTypes.object
};

NewField= reduxForm({
  form: 'newFieldAdd'  // a unique identifier for this form
})(NewField);

export default NewField;
