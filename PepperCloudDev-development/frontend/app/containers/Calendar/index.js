/*
 *
 * Calendar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectCalendar from './selectors';
import messages from './messages';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import BigCalendarCSS from 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button, Row, Col, Modal} from 'react-bootstrap';
var CreateTask = require('./CreateTask')
var CalEvent = require('./CalEvent')


BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

export class Calendar extends React.Component { // eslint-disable-line react/prefer-stateless-function



constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (

        <div className="content-app fixed-header">
            <div className="app-body">
                <Row>
                  <Col>
                     <div className="box1">
                      <CreateTask/>
                    </div>
                  </Col>
               </Row>

                <div className="box">
                  <BigCalendar
                    {...this.props}
                    culture='en'
                    selectable
                    eventPropGetter={(this.eventStyleGetter)}
                    views={['month', 'week', 'day', 'agenda']}
                    defaultView='month'
                    events={events}
                    defaultDate={new Date()}
                    style={{height: 800}}
                    onSelectSlot={(this.slotSelected)}
                    onSelectEvent={event => onSelectEvent(event)}
                    />
                </div>
            </div>
         </div>

    );
  }

openModal() {
      this.setState({ isModalOpen: true })
      console.log('------>'+this.state.isModalOpen);
    }

closeModal() {
      this.setState({ isModalOpen: false })
    }

}

function eventStyleGetter(event, start, end, isSelected) {
    console.log('------>'+event);
    var backgroundColor = '#' + event.hexColor;
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 0.8,
        color: 'black',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
}

Calendar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Calendar: makeSelectCalendar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  index: '9999',
  background: 'yellow'
};
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
