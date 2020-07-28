import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Dropdown, MenuItem } from 'react-bootstrap';

class SingleView extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    { /* START Language list */ }
                    <div className="pull-right">
                        <Dropdown id="dropdown-tr" pullRight>
                            <Dropdown.Toggle>
                                English
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="animated fadeInUpShort">
                                <MenuItem eventKey="1" data-set-lang="en">English</MenuItem>
                                <MenuItem eventKey="2" data-set-lang="es">Spanish</MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    { /* END Language list */ }
                    Dashboard
                    <small data-localize="dashboard.WELCOME">TODO</small>
                </div>
                <Row>
                    <Col xs={12} className="text-center">
                        <h2 className="text-thin">Nice to see you</h2>
                        <p>
                            ...
                        </p>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}

export default SingleView;
