/*
 *
 * Create Task
 *
 */
var React = require('react');
import { Button, Row, Col, Modal} from 'react-bootstrap';

import PropTypes from 'prop-types';
import Select from 'react-select';
import ErrorMessage from 'components/Common/ErrorMessage';
import 'react-select/dist/react-select.css';
import users from './users';

const CalEvent = React.createClass({

    /**Modal*/
    getInitialState() {
       return { isModalOpen: false };
    },

     close(){
       this.setState({ showModal: false });
     },

     open(){
       this.setState({ showModal: true });
     },

    /**User Drop down*/
    propTypes: {
    		label: PropTypes.string,
    	},

    setValue (value) {
    		this.setState({ value });
    		if (value) {
    			console.log('Support level selected:', value.label);
    		}
    	},

    renderValue: function(option) {
     		return <strong style={{ color: option.color }}>{option.label}</strong>;
     	},

     render() {

      return (
           <div>
             <Button onClick={this.open}>
               Create Event
             </Button>

             <Modal show={this.state.showModal} onHide={this.close}>
               <Modal.Header closeButton>
                 <Modal.Title>Create Event</Modal.Title>
                 <header>

                 </header>
               </Modal.Header>
               <Modal.Body>
                 <div className="modal-body">

                    <form  id="task-form" className="smart-form client-form" onSubmit={this._onSubmit} role="form">
                       <div className="form-group row">
                          <label className="col-md-4 col-xs-12 form-control-label text-md-right" >Task Type</label>
                          <div className="section">
                             <Select
                                onInputChange={(inputValue) => this._inputValue = inputValue}
                                options={users}
                                onChange={this.setValue}
                                value={this.state.value}
                                valueRenderer={this.renderValue}
                                />
                          </div>
                       </div>

                        <div className="form-group row">
                            <label className="col-md-4 col-xs-12 form-control-label text-md-right" >Subject</label>
                            <div className="col-md-7 col-xs-12">

                              <input id="subject"
                                     className="form-control"
                                     type="text"
                                     name="subject"
                                     value={this.state.value}
                                     autoCorrect='off'
                                     autoCapitalize='off'
                                     spellCheck='false'
                                     placeholder="Subject" required />
                            </div>
                          </div>

                         <div className="form-group row">
                             <label className="col-md-4 col-xs-12 form-control-label text-md-right" >Assigned To</label>
                             <div className="section">
                                <Select
                                   onInputChange={(inputValue) => this._inputValue = inputValue}
                                   options={users}
                                   onChange={this.setValue}
                                   value={this.state.value}
                                   valueRenderer={this.renderValue}
                                   />
                             </div>
                          </div>

                          <div className="form-group row">
                              <label className="col-md-4 col-xs-12 form-control-label text-md-right" >Details</label>
                              <div className="col-md-7 col-xs-12">

                                <textarea id="details"
                                       className="form-control"
                                       type="textarea"
                                       name="details"
                                       value={this.state.value}
                                       autoCorrect='off'
                                       autoCapitalize='off'
                                       spellCheck='false'
                                       placeholder="Details" required />
                              </div>
                            </div>
                      <Row>
                         <div className="form-group row">
                             <label className="col-md-4 col-xs-12 form-control-label text-md-right" >Name</label>
                             <div className="section">
                                <Select
                                   onInputChange={(inputValue) => this._inputValue = inputValue}
                                   options={users}
                                   onChange={this.setValue}
                                   value={this.state.value}
                                   valueRenderer={this.renderValue}
                                   />
                             </div>
                          </div>

                         <div className="form-group row">
                             <label className="col-md-4 col-xs-12 form-control-label text-md-right" >Linked To</label>
                             <div className="section">
                                <Select
                                   onInputChange={(inputValue) => this._inputValue = inputValue}
                                   options={users}
                                   onChange={this.setValue}
                                   value={this.state.value}
                                   valueRenderer={this.renderValue}
                                   />
                             </div>
                          </div>
                     </Row>
                      <footer>
                        <button type="submit" className="btn btn-sm btn-primary right">
                          Save
                        </button>
                      </footer>
                    </form>
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


module.exports = CalEvent;
