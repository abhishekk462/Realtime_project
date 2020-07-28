import React from 'react';
import { View,Breadcrumb, Image,Label, Modal, Grid, Row, Col, Panel, Button, ListGroup, ListGroupItem, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem, SplitButton }
from 'react-bootstrap';

import logo from "../../assets/img/icon_leads.png";


class NewBrudcrumModel extends React.Component {

    render() {
        let crums = [];
        this.props.data.forEach((item, index) => {
            crums.push(<Breadcrumb.Item href={item.url} key={index} >{item.name}</Breadcrumb.Item>);
        });
        return (

                <Row className="show-grid" style={{paddingTop: 40}}>

                    <Col xs={2} md={4}>
                        <Row>
                            <h4 className="breadcrum_title">
                                <Col style={{width: 33,height:35,background:"#FD7A1E",marginLeft:17,paddingTop: 6, paddingLeft: 5, paddingRight: 2,borderRadius:1}}>
                                    <img src={logo} alt="Lead" className="img-responsive " />
                                </Col>
                                <Col style={{marginLeft: 62,marginTop: -26,
                                    marginBottom: 10,fontFamily:"roboto"}}><strong>{this.props.name}</strong>
                                </Col>
                            </h4>
                        </Row>
                    </Col>

                    <Col xs={10} md={8}>
                    <Breadcrumb>
                        {crums}
                    </Breadcrumb>
                    </Col>
                </Row>
                );
    }

}


export default NewBrudcrumModel;

