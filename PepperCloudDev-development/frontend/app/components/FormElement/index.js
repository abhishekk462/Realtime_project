import React from 'react';
import { Grid, Row, Col, Panel, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem,SplitButton } from 'react-bootstrap';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';

import coreService from 'services/coreService';

import EditDropdown from './EditDropdown';



import {
  TYP_TEXT,
  TYP_EMAIL,
  TYP_SELECT,
  TYP_AUTO_NUMBER,
  TYP_FORMULA,
  TYP_SUMMARY,
  TYP_LOOKUP,
  TYP_EXT_LOOKUP,
  TYP_CHECKBOX,
  TYP_CURRENCY,
  TYP_DATE,
  TYP_DATE_TIME,
  TYP_TIME,
  TYP_GEOLOCATION,
  TYP_NUMBER,
  TYP_PERCENT,
  TYP_PHONE,
  TYP_MULTI_SELECT,
  TYP_RICH_TEXT,
  TYP_ENCODED,
  TYP_URL,
  TYP_LABEL,
  TYP_TEXTAREA,
  TYP_ZIPCODE,
} from './ElementTypes';


class FormElement extends React.PureComponent{


  constructor(props) {
    super(props);

    this.state = {
      showModal:false,
      options:[],
      value:''
    };
  }

  coponentWillMount(){
    this.handleChange.bind(this);
    this.handleFieldValidation.bind(this);
    this.setState({options:this.props.data.parameters});
  }



  handleChange(event){
    let obj = {};
   // console.log("event", this);
    obj[this.props.data.fieldId]=event.target.value;
    this.props.formChange(obj);

  }


  handleChangeSelect(item){
    let obj = {};
     console.log("event", item);
    if(!!item) {
      obj[this.props.data.fieldId] = item.value;
      this.props.formChange(obj);
      this.setState({value: item.value});
    }else{
      this.setState({value: ''});
    }
  }

   handleFieldValidation(event){
  //  console.log("handling field validation", event.target.value, this.props.data.fieldId);
  if(this.props.data.fieldId =='f1067' || this.props.data.fieldId=='f108'){

    this.props.handleSocial(this.props.data.fieldId);
  }

   // props.originalLabel.validationState="error";
   // console.log('orgField',this.props.originalLabel);
  }


   handleEditDropdownClose() {
    this.setState({ showModal: false });
  }

   handleEditDropdownOpen() {
     this.setState({ showModal: true });
     console.log('showing model', this.state);

  }

  removeCurrentItem(option){
    let oldOptions = this.props.data.parameters;
    if(this.state.options.length>0){
      oldOptions = this.state.options;
    }

    let newOptions =  oldOptions.filter((item)=> item.label != option.label)
    this.setState({ options: newOptions });
  }


  addCurrentItem(item){
    let oldOptions = this.props.data.parameters;
    if(this.state.options.length>0){
      oldOptions = this.state.options;
    }

    oldOptions.push({id:'item',label:item,value:item, fieldId:this.props.data.fieldId});
    this.setState({ options: oldOptions });
  }



  getOptions(daa) {
    console.log(daa);
    return coreService.fieldParamValues(this.props.data.fieldId);
  }

 render(){



   let props = this.props;

   let content = (<div>{props.data.fieldId}</div>);
   let type = props.data.fieldType.description;

   let options = props.data.parameters;

    if(this.state.options.length>0){
     options = this.state.options;
   }



      switch (type) {
        case TYP_TEXT :
          return (
            <FormControl id={props.data.fieldType.fieldId}
                         name={props.data.fieldType.fieldId}
                         onChange={this.handleChange.bind(this)}
                         onBlur={this.handleFieldValidation.bind(this)}
                         type="text"
                         placeholder={props.data.fieldType.name}
                         className="form-control"
                         maxLength={props.data.max}/>
          );
        case TYP_SELECT :
          //console.log('params',props.data);
          //props.data.parameters
          let selectOptions = [];
          if(!!options && options.length > 0) {
             selectOptions = options.map((option, index) => (

              <option key={`section-field-select-option-${index}`} value={option.value}>
                {option.label}
              </option>

            ));
          }

         // console.log('select--',props.data);

          let selectContent = (

          <Select
            className="form-control"
            name={props.data.fieldId}
            value={this.state.value}
            options={options}
            onChange={this.handleChangeSelect.bind(this)}
            labelKey="label"
            valueKey="value"
          />

            // <select className="form-control" onChange={this.handleChange.bind(this)} name={props.data.fieldId}>
            //   <option value="">--Select--</option>
            //   {selectOptions}
            // </select>
          );

          if(props.customize){
            selectContent= (
              <div>
              <InputGroup>
              <select className="form-control" onChange={this.handleChange.bind(this)} name={props.data.fieldId}>
                <option value="">--Select--</option>
                {selectOptions}
              </select>
              <InputGroup.Addon onClick={this.handleEditDropdownOpen.bind(this)}>
                <em className="fa fa-pencil" />
              </InputGroup.Addon>
            </InputGroup>
                <EditDropdown parameters={options}
                              removeCurrentItem={this.removeCurrentItem.bind(this)}
                              addCurrentItem={this.addCurrentItem.bind(this)}
                              show={this.state.showModal} fieldId={props.data.fieldId} close={this.handleEditDropdownClose.bind(this)} />
              </div>
            );
          }

          return selectContent;
        case TYP_EMAIL :
          return (
            <FormControl id={props.data.fieldType.fieldId}
                         name={props.data.fieldType.fieldId}
                         onChange={this.handleChange.bind(this)}
                         type="text"
                         placeholder={props.data.fieldType.name}
                         className="form-control"
                         maxLength={props.data.max}/>
          );
        case TYP_NUMBER :
          return (
            <FormControl id={props.data.fieldType.fieldId}
                         name={props.data.fieldType.fieldId}
                         onChange={this.handleChange.bind(this)}
                         type="text"
                         placeholder={props.data.fieldType.name}
                         className="form-control"
                         maxLength={props.data.max}/>
          );
        case TYP_URL :
          return (
            <FormControl id={props.data.fieldType.fieldId}
                         name={props.data.fieldType.fieldId}
                         onChange={this.handleChange.bind(this)}
                         type="text"
                         placeholder={props.data.fieldType.name}
                         className="form-control"
                         maxLength={props.data.max}/>
          );
        case TYP_PHONE :
          return (
            <FormControl id={props.data.fieldType.fieldId}
                         name={props.data.fieldType.fieldId}
                         onChange={this.handleChange.bind(this)}
                         type="text"
                         placeholder={props.data.fieldType.name}
                         className="form-control"
                         maxLength={props.data.max}/>
          );
        case TYP_TEXTAREA :
          return (
            <FormControl id={props.data.fieldType.fieldId}
                         name={props.data.fieldType.fieldId}
                         onChange={this.handleChange.bind(this)}
                         componentClass="textarea"
                         placeholder={props.data.fieldType.name}
                         className="form-control"
                         maxLength={props.data.max}/>
          );
        case TYP_ZIPCODE :
          return (
            <FormControl id={props.data.fieldType.fieldId}
                         name={props.data.fieldType.fieldId}
                         onChange={this.handleChange.bind(this)}
                         type="text"
                         placeholder={props.data.fieldType.name}
                         className="form-control"
                         maxLength={props.data.max}/>
          );
        case TYP_LABEL :
              return (
                <span className="form-control-static" id={props.data.fieldType.fieldId}> </span>
              );

        default:
          console.log(type , 'not yet defined');
          return content;
         // console.log('nothing here',content);
      }


   return content;

 }
}

/*

 <FormControl id={props.data.fieldType.fieldId} name={props.data.fieldType.fieldId} componentClass="select" placeholder={props.data.fieldType.name}>
 <option value="select">select</option>
 <option value="other">...</option>
 </FormControl>


 <Select
 className="form-control"
 name={props.data.fieldType.fieldId}
 onChange={handleSelectChange}
 value={props.formData[props.data.fieldType.fieldId]}
 options={props.data.parameters}
 />
 */

FormElement.propTypes = {
  data : React.PropTypes.object,
};

export default FormElement;
