import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from '../../components/Layout/Header'
import Sidebar from 'components/Layout/Sidebar'
import Offsidebar from '../../components/Layout/Offsidebar'
import Footer from '../../components/Layout/Footer'

import withProgressBar from 'components/ProgressBar';
import Notifications from 'react-notification-system-redux';
import {connect} from 'react-redux';
import { Notifs } from 'redux-notifications';

// Animations supported
//      'rag-fadeIn'
//      'rag-fadeInUp'
//      'rag-fadeInDown'
//      'rag-fadeInRight'
//      'rag-fadeInLeft'
//      'rag-fadeInUpBig'
//      'rag-fadeInDownBig'
//      'rag-fadeInRightBig'
//      'rag-fadeInLeftBig'
//      'rag-zoomBackDown'

class Base extends React.Component {

  constructor(){
    super();
    document.body.classList.add('layout-fixed');
  }

  render() {

    // document.body.classList.add('aside-collapsed');


    const animationName = 'rag-fadeIn';

    const {notifications} = this.props;

    console.log('notificationds',notifications);

    //Optional styling
    const notification_style = {
      NotificationItem: { // Override the notification item
        DefaultStyle: { // Applied to every notification, regardless of the notification level
          margin: '10px 5px 2px 1px'
        },

        success: { // Applied only to the success notification item
          color: 'red'
        }
      }
    };

    return (
      <div style={{height: '100%',background:"#18202be3"}} className="wrapper">

        <Notifs />

        <Header />

        <Sidebar />

        <Offsidebar />

        <ReactCSSTransitionGroup
          component="section" style={{height: '100%'}}
          transitionName={animationName}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>

        <Footer />



      </div>
    );
  }
}

Base.contextTypes = {
  store: React.PropTypes.object
};

Base.propTypes = {
  children: React.PropTypes.node,
  notifications: React.PropTypes.array
};

//export default Base;
export default withProgressBar(connect(
  state => ({ notifications: state.notifications })
)(Base));
