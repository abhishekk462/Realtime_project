import React from 'react';
import {Image,OverlayTrigger,Tooltip, Modal, Row, Col,ControlLabel, ListGroup,ListGroupItem, Button, FormControl, FormGroup, InputGroup, Well, MenuItem,SplitButton } from 'react-bootstrap';
import classNames from  'classnames/bind';
import styles from './form-element-type-style.css';

import TEXT_IMG from 'assets/img/form-types/TEXT.png';
import SELECT_IMG from 'assets/img/form-types/SELECT.png';
import TEXTAREA_IMG from 'assets/img/form-types/TEXTAREA.png';
import PhoneImg from 'assets/img/form-types/PHONE.png';
import GeolocationImg from 'assets/img/form-types/GEOLOCATION.png';
import EmailImg from 'assets/img/form-types/EMAIL.png';
import UrlImg from 'assets/img/form-types/URL.png';
import AutonumberImg from 'assets/img/form-types/AUTO_NUMBER.png';
import DateImg from 'assets/img/form-types/DATE.png';
import DateTimeImg from 'assets/img/form-types/DATE-TIME.png';
import FormulaImg from 'assets/img/form-types/FORMULA.png';
import NumberImg from 'assets/img/form-types/NUMBER.png';
import PercentageImg from 'assets/img/form-types/PERCENTAGE.png';
import TimeImg from 'assets/img/form-types/TIME.png';
import ZipCodeImg from 'assets/img/form-types/ZIPCODE.png';



export default class FormElementType extends React.PureComponent{

  constructor(props) {
    super(props);

    this.state = { hovered:false, selected:false};

  }

  render(){

    const {element} = this.props;
    let that = this;


//console.log('***', this.props.selectedElementType ,element);
    let cx = classNames.bind(styles);
    let btnClass = cx({
      'well-sm' : true,
      constWidtlElem : true,
      elmOver: this.state.hovered,
      elmSelected:  this.props.selectedElementType == element

    });

    const tooltip = (
      <Tooltip id="tooltip"><strong>{element}</strong> Check this info.</Tooltip>
    );

    {/*<OverlayTrigger placement="bottom" overlay={tooltip} >*/}
      {/*<Image style={{width: 55, height: 35}} src={that.getImageName(element)} responsive/>*/}

    {/*</OverlayTrigger>*/}

    return(
      <div onClick={this.handleOnClick.bind(this)} className={btnClass} onMouseEnter={() => this.setState({hovered:true}) } onMouseLeave={() => this.setState({hovered:false}) }>
        <div  >
          <Image style={{width: 55, height: 35}} src={that.getImageName(element)} responsive/>

        </div>
        {element}
      </div>
    );
  }

  handleOnClick(element){
    this.setState({selected:true});
    this.props.onClick(element);
  }


  getImageName(type){
    // console.log('type is', type);
    switch(type){
      case "TEXT":
        return TEXT_IMG;
      case "SELECT":
        return SELECT_IMG;
      case "TEXTAREA":
        return TEXTAREA_IMG;
      case "GEOLOCATION":
        return GeolocationImg;
      case "EMAIL":
        return EmailImg;
      case "URL":
        return UrlImg;
      case "PHONE":
        return PhoneImg;
      case "AUTO_NUMBER":
        return AutonumberImg;
      case "DATE":
        return DateImg;
      case "DATE_TIME":
        return DateTimeImg;
      case "FORMULA":
        return FormulaImg;
      case "PERCENT":
        return PercentageImg;
      case "TIME":
        return TimeImg;
      case "ZIPCODE":
        return ZipCodeImg;
      case "NUMBER":
        return NumberImg;
      default:
        return TEXT_IMG;
    }
  }
}
