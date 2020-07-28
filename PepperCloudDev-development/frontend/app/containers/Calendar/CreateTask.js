/*
 *
 * Create Event/Task
 *
 */
var React = require('react');

import { Button, Row, Col, Modal, Panel, FormGroup} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Select from 'react-select';
import ErrorMessage from 'components/Common/ErrorMessage';
import 'react-select/dist/react-select.css';

import {saveEvent} from './actions';

import users from './users';
import tasks from './task';
import assignto from './assignTo';
import linkedto from './linkedTo';

const CreateTask = React.createClass({
    /**User Drop down*/
    propTypes: {
        label: PropTypes.string,
        },

    getDefaultProps() {
        return {
          value: 'S'
        };
      },

    /**Modal*/
    getInitialState() {
       return { isModalOpen: false};
    },

    _onSubmitCreateTask(){
        console.log('------>Call Submit Create task');
        console.log('finally 1 task type', this.state.taskType.taskType)
        console.log('finally subject', this.state.subject)
        console.log('finally assignTo', this.state.assignTo)
        console.log('finally details', this.state.details)
        console.log('finally linkedTo', this.state.linkedTo)
        this._createTask(this.state);
    },

    _createTask (obj) {
      console.log('finally in Create Task my link', this.state.details)
      console.log('prop Dispathc : ', this.props.dispatch);
      saveEvent(this.state);
      //this.props.dispatch(saveEvent(this.state))
      //this.close();
     },

     close(){
       this.setState({ showModal: false });
     },

     open(){
       this.setState({ showModal: true });
     },

     setSubject: function (evt) {
        this.setState({ subject: evt.target.value});
     },

    setTaskType (taskType) {
      this.setState({ taskType });
     },

     setAssignTo (assignTo) {
       this.setState({ assignTo });
      },

     setDetails: function (evt) {
       this.setState({ details: evt.target.value});
      },

     setName (name) {
       this.setState({ name });
      },

     setLinkedTo (linkedTo) {
       this.setState({ linkedTo });
      },

    renderValue: function(option) {
     		return <strong style={{ color: option.color }}>{option.label}</strong>;
     	},

     render() {

     let {dispatch} = this.props;
     //let {data} = this.props.data;
        // console.log('in render', this.props);

      return (
           <div>
             <Button onClick={this.open}>
               Add Task
             </Button>

             <Modal show={this.state.showModal} onHide={this.close}>
               <Modal.Header closeButton>
                 <Modal.Title>Add Task</Modal.Title>
                 <header>

                 </header>
               </Modal.Header>
               <Modal.Body>
                 <div className="modal-body">

                       <Row>
                       <Col>
                       <FormGroup>
                          <label className="col-md-4 col-xs-12 form-control-label text-md-right" >Task Type</label>
                              <Select
                                onInputChange={(inputValue) => this._inputValue = inputValue}
                                options={tasks}
                                onChange={this.setTaskType}
                                value={this.state.taskType}
                                valueRenderer={this.renderValue}
                                />
                          </FormGroup>
                        </Col>

                        <Col>
                        <div className="form-group row">
                            <label className="col-md-4 col-xs-12 form-control-label text-md-right" >Subject</label>
                            <div className="col-md-7 col-xs-12">
                              <input id="subject"
                                     className="form-control"
                                     type="text"
                                     name="subject"
                                     value={this.state.subject1}
                                     onChange={this.setSubject}
                                     autoCorrect='off'
                                     autoCapitalize='off'
                                     spellCheck='false'
                                     placeholder="Subject" required/>
                            </div>
                          </div>
                          </Col>
                          </Row>

                          <Row>
                          <Col>
                         <div className="form-group row">
                             <label className="col-md-4 col-xs-12 form-control-label text-md-right" >Assigned To</label>
                             <div className="section">
                                <Select
                                   onInputChange={(inputValue) => this._inputValue = inputValue}
                                   options={assignto}
                                   onChange={this.setAssignTo}
                                   value={this.state.assignTo}
                                   valueRenderer={this.renderValue}
                                   />
                             </div>
                          </div>
                        </Col>
                         <Col>
                          <div className="form-group row">
                              <label className="col-md-4 col-xs-12 form-control-label text-md-right" >Details</label>
                              <div className="col-md-7 col-xs-12">

                                <textarea id="details"
                                       className="form-control"
                                       type="textarea"
                                       name="details"
                                       value={this.state.details1}
                                       onChange={this.setDetails}
                                       autoCorrect='off'
                                       autoCapitalize='off'
                                       spellCheck='false'
                                       placeholder="Details" required />
                              </div>
                            </div>
                        </Col>
                        </Row>

                         <div className="form-group row">
                             <label className="col-md-4 col-xs-12 form-control-label text-md-right" >Name</label>
                             <div className="section">
                                <Select
                                   onInputChange={(inputValue) => this._inputValue = inputValue}
                                   options={users}
                                   onChange={this.setName}
                                   value={this.state.name}
                                   valueRenderer={this.renderValue}
                                   />
                             </div>
                          </div>

                         <div className="form-group row">
                             <label className="col-md-4 col-xs-12 form-control-label text-md-right" >Linked To</label>
                             <div className="section">
                                <Select
                                   onInputChange={(inputValue) => this._inputValue = inputValue}
                                   options={linkedto}
                                   onChange={this.setLinkedTo}
                                   value={this.state.linkedTo}
                                   valueRenderer={this.renderValue}
                                   />
                             </div>
                          </div>


                      <footer>
                        <Button onClick={this._onSubmitCreateTask} className="btn btn-sm btn-primary right">
                          Save
                        </Button>
                      </footer>

                 </div>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={this.close}>Close</Button>
               </Modal.Footer>
             </Modal>
           </div>
         );
       }
 });


module.exports = CreateTask;
