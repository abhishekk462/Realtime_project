/*
 *
 * Task
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectTask from './selectors';
import messages from './messages';
import SummaryComponent from 'components/SummaryComponent';
//require('./task.scss');
import {NavDropdown, PageHeader, Button, ButtonGroup, ButtonToolbar, Grid, Row, Col, Panel, FormControl, FormGroup, InputGroup, DropdownButton,
  MenuItem, ListGroup, ListGroupItem, Navbar, NavItem, Nav} from 'react-bootstrap';
import Select from 'react-select';


export class Task extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);

    this.state = {element:''};
  }

  editField() {
    console.log("Edit Field");
  }


  render() {

    console.log('element is', this.state);
    return (
      <div className="container">
        {/*<FormattedMessage {...messages.header} />*/}
        {/*<FormattedMessage id={messages.header.id} defaultMessage={messages.header.defaultMessage} />*/}
        {/*<SummaryComponent />*/}
        <PageHeader>Task - Update</PageHeader>

        <ButtonToolbar>
          <Button bsStyle="info" bsSize="xsmall">Edit</Button>
          <Button bsStyle="info" bsSize="xsmall">Save</Button>
          <Button bsStyle="info" bsSize="xsmall">Cancel</Button>
          <Button bsStyle="default" bsSize="xsmall"><em className="fa fa-print"></em></Button>
        </ButtonToolbar>

          <Row>
            <Col xs={9} md={9}>
              <Panel>
                <Row>
                  <Col xs={6} md={6}>
                    <Row>
                      <Col md={3}><label htmlFor="subject">Subject</label></Col>
                      <Col md={5}>
                        <input name="subject" type="text" className="form-control"/>
                      </Col>
                      <Col className="fa fa-pencil" onClick={this.editField}></Col>
                    </Row>
                    <Row>
                      <Col md={3}><label htmlFor="taskType">Task Type</label></Col>
                      <Col md={5}>
                        <input name="taskType" type="text" className="form-control"/>
                      </Col>
                      <Col className="fa fa-pencil"></Col>
                    </Row>
                    <Row>
                      <Col md={3}><label htmlFor="subject">Assigned To</label></Col>
                      <Col md={5}>
                        <input name="subject" type="text" className="form-control"/>
                      </Col>
                      <Col className="fa fa-pencil"></Col>
                    </Row>
                    <Row>
                      <Col md={3}><label htmlFor="subject">Start Date</label></Col>
                      <Col md={5}>
                        <input name="subject" type="text" className="form-control"/>
                      </Col>
                      <Col className="fa fa-pencil"></Col>
                    </Row>
                    <Row>
                      <Col md={3}><label htmlFor="subject">Due Date</label></Col>
                      <Col md={5}>
                        <input name="subject" type="text" className="form-control"/>
                      </Col>
                      <Col className="fa fa-pencil"></Col>
                    </Row>
                    <Row>
                      <Col md={3}><label htmlFor="subject">Status</label></Col>
                      <Col md={5}>
                        <input name="subject" type="text" className="form-control"/>
                      </Col>
                      <Col className="fa fa-pencil"></Col>
                    </Row>
                    <Row>
                      <Col md={3}><label htmlFor="subject">Priority</label></Col>
                      <Col md={5}>
                        <input name="subject" type="text" className="form-control"/>
                      </Col>
                      <Col className="fa fa-pencil"></Col>
                    </Row>
                    <Row>
                      <Col md={3}><label htmlFor="subject">Details</label></Col>
                      <Col md={5}>
                        <input name="subject" type="text" className="form-control"/>
                      </Col>
                      <Col className="fa fa-pencil"></Col>
                    </Row>
                  </Col>
                  <Col xs={6} md={6}>
                    <Row>
                      <Col md={3}><label htmlFor="name">Name</label></Col>
                      <Col md={5}>
                        <input name="subject" type="text" className="form-control"/>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3}><label htmlFor="subject">Linked To</label></Col>
                      <Col md={5}>
                        <input name="linkedTo" type="text" className="form-control"/>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Panel>
            </Col>

            {/* Right side Panel*/}
            <Col xs={3} md={3}>
            </Col>
          </Row>

          <div>
            <Navbar inverse collapseOnSelect>
              <Navbar.Collapse>
                <Nav activeKey="1" onSelect={this.handleSelect.bind(this)}>
                  <NavDropdown eventKey={1} title="Activity" id="activity-nav-dropdown">
                    <MenuItem eventKey={1.1}>Log Call</MenuItem>
                    <MenuItem eventKey={1.2}>Add Note</MenuItem>
                    <MenuItem eventKey={1.3}>Send Email</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={1.4}>Add Attachment</MenuItem>
                    <MenuItem eventKey={1.5}>Add Comment</MenuItem>
                  </NavDropdown>
                  <NavItem eventKey={2} id="information">Information</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <div className="content-wrapper">

              {this.state.element}
            </div>

          </div>
      </div>
    );
  }

  handleSelect(eventKey) {
    let elem = (<div></div>);

    if(eventKey == 1.1) {
      elem = (
        <div>
          <Row>
            <Col xs={9} md={9}>
              <Panel>
                <Row>
                  <Col xs={4} md={4}>
                    <FormGroup>
                      <label htmlFor="logCallSubject">Subject</label>
                      <input type="text" className="form-control"/>
                    </FormGroup>
                  </Col>
                  <Col xs={4} md={4}>
                    <FormGroup>
                      <label>Name</label>
                      <Select className="form-control"/>
                    </FormGroup>
                  </Col>
                  <Col xs={4} md={4}>
                    <FormGroup>
                      <label>Linked To</label>
                      <Select className="form-control"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={9} md={9}>
                    <FormGroup>
                      <label>Details</label>
                      <textarea className="form-control"/>
                    </FormGroup>
                  </Col>
                </Row>
              </Panel>
            </Col>
          </Row>
        </div>
      );
    }

    if(eventKey == 1.2) {
      elem = (
        <div>
          <Row>
            <Col xs={9} md={9}>
              <Panel>
                <Row>
                  <Col xs={4} md={4}>
                    <FormGroup>
                      <label htmlFor="logCallSubject">Subject</label>
                      <input type="text" className="form-control"/>
                    </FormGroup>
                  </Col>
                  <Col xs={4} md={4}>
                    <FormGroup>
                      <label>Name</label>
                      <Select className="form-control"/>
                    </FormGroup>
                  </Col>
                  <Col xs={4} md={4}>
                    <FormGroup>
                      <label>Linked To</label>
                      <Select className="form-control"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={9} md={9}>
                    <FormGroup>
                      <label>Details</label>
                      <textarea className="form-control"/>
                    </FormGroup>
                  </Col>
                  <Col xs={3} md={3}>
                    <FormGroup>
                      <label>Share With</label>
                      <input type="text" className="form-control"/>
                    </FormGroup>
                  </Col>
                </Row>
              </Panel>
            </Col>
          </Row>
        </div>
      );
    }

    if(eventKey == 1.3) {
      elem = (
        <div>
          <Row>
            <Col xs={9} md={9}>
              <Panel>
                <Row>
                  <Col xs={4} md={4}>
                    <FormGroup>
                      <label htmlFor="logCallSubject">TO*</label>
                      <input type="text" className="form-control"/>
                    </FormGroup>
                  </Col>
                  <Col xs={4} md={4}>
                    <FormGroup>
                      <label>Name</label>
                      <Select className="form-control"/>
                    </FormGroup>
                  </Col>
                  <Col xs={4} md={4}>
                    <FormGroup>
                      <label>Linked To</label>
                      <Select className="form-control"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4}>
                    <FormGroup>
                      <label>CC/BCC</label>
                      <input type="text" className="form-control"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4}>
                    <FormGroup>
                      <label>Subject*</label>
                      <input type="text" className="form-control"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} md={8}>
                    <FormGroup>
                      <label>Content</label>
                      <textarea className="form-control"/>
                    </FormGroup>
                  </Col>
                </Row>
              </Panel>
            </Col>
          </Row>
        </div>
      );
    }

    if(eventKey == 1.4) {
      elem = (
        <div>
          <Row>
            <Col xs={9} md={9}>
              <Panel>
                <Row>
                  <Col xs={6} md={6}>
                    <FormGroup>
                      <label htmlFor="logCallSubject">Attach File</label>
                      <input type="text" className="form-control"/>
                    </FormGroup>
                  </Col>
                  <Col xs={6} md={6}>
                    <FormGroup>
                      <label>Name</label>
                      <Select className="form-control"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={9} md={9}>
                    <FormGroup>
                      <label>Details</label>
                      <textarea className="form-control"/>
                    </FormGroup>
                  </Col>
                </Row>
              </Panel>
            </Col>
          </Row>
        </div>
      );
    }

    if(eventKey == 2) {
      elem = (
        <div>
          <Row>
            <Col xs={9} md={9}>
              <Panel>
              <Row>
                <Col xs={6} md={6}>
                  <Row>
                    <Col md={3}><label htmlFor="frequency">Frequency</label></Col>
                    <Col md={5}>
                      <input name="frequency" type="text" className="form-control"/>
                    </Col>
                    <Col className="fa fa-pencil"></Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <Row>
                    <Col md={3}><label htmlFor="subject">Repeat</label></Col>
                    <Col md={5}>
                      <input name="repeat" type="text" className="form-control"/>
                    </Col>
                    <Col className="fa fa-pencil"></Col>
                  </Row>
                </Col>
                <Col xs={6} md={6}>
                  <Row>
                    <Col md={3}><label htmlFor="subject">Repeat On</label></Col>
                    <Col md={5}>
                      <input name="repeatOn" type="text" className="form-control"/>
                    </Col>
                    <Col className="fa fa-pencil"></Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <Row>
                    <Col md={3}><label htmlFor="startDate">Start Date</label></Col>
                    <Col md={5}>
                      <input name="startDate" type="text" className="form-control"/>
                    </Col>
                    <Col className="fa fa-pencil"></Col>
                  </Row>
                </Col>
                <Col xs={6} md={6}>
                  <Row>
                    <Col md={3}><label htmlFor="endDate">End Date</label></Col>
                    <Col md={5}>
                      <input name="endDate" type="text" className="form-control"/>
                    </Col>
                    <Col className="fa fa-pencil"></Col>
                  </Row>
                </Col>
              </Row>
              </Panel>
            </Col>
          </Row>
        </div>
      );
    }

    this.setState({element:elem});
    return elem;
  }
}

Task.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Task: makeSelectTask(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
