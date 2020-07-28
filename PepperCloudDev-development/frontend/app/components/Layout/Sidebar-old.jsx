import React from 'react';
import { Router, Route, Link, History, withRouter } from 'react-router';
import pubsub from 'pubsub-js';
import { Collapse } from 'react-bootstrap';
//import SidebarRun from './Sidebar.run';
import auth from 'containers/Login/authService';

class Sidebar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            userBlockCollapse: false,
            collapse: {
                singleview: this.routeActive(['singleview']),
                leadlist: this.routeActive(['leadlist'])
            }
        };
        this.pubsub_token = pubsub.subscribe('toggleUserblock', () => {
            this.setState({
                userBlockCollapse: !this.state.userBlockCollapse
            });
        });
    };

    componentDidMount() {
        // pass navigator to access router api
      //  SidebarRun(this.navigator.bind(this));
    }

    navigator(route) {
        this.props.router.push(route)
    }

    componentWillUnmount() {
        // React removed me from the DOM, I have to unsubscribe from the pubsub using my token
        pubsub.unsubscribe(this.pubsub_token);
    }

    routeActive(paths) {
        paths = Array.isArray(paths) ? paths : [paths];
        for (let p in paths) {
            if (this.props.router.isActive(paths[p]) === true)
                return true;
        }
        return false;
    }

    toggleItemCollapse(stateName) {
        var newCollapseState = {};
        for (let c in this.state.collapse) {
            if (this.state.collapse[c] === true && c !== stateName)
                this.state.collapse[c] = false;
        }
        this.setState({
            collapse: {
                [stateName]: !this.state.collapse[stateName]
            }
        });
    }

    render() {

      if(!auth.loggedIn()){
        return (
          <div className="hidden">Not Logged In</div>
        )
      }else
        return (
            <aside className='aside'>
                { /* START Sidebar (left) */ }
                <div className="aside-inner">
                    <nav data-sidebar-anyclick-close="" className="sidebar">
                        { /* START sidebar nav */ }
                        <ul className="nav">
                            { /* START user info */ }
                            <li className="has-user-block">
                                <Collapse id="user-block" in={ this.state.userBlockCollapse }>
                                    <div>
                                        <div className="item user-block">
                                            { /* User picture */ }
                                            <div className="user-block-picture">
                                                <div className="user-block-status">
                                                    <img src="img/0-3.jpeg" alt="Avatar" width="60" height="60" className="img-thumbnail img-circle" />
                                                    <div className="circle circle-success circle-lg"></div>
                                                </div>
                                            </div>
                                            { /* Name and Job */ }
                                            <div className="user-block-info">
                                                <span className="user-block-name">Hello, Sunil</span>
                                                <span className="user-block-role">Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </li>
                            { /* END user info */ }
                            { /* Iterates over all sidebar items */ }
                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.HEADER"> Navigation</span>
                            </li>

                            <li className={ this.routeActive('singleview') ? 'active' : '' }>
                                <Link to="singleview" title="Single View">
                                <em className="icon-grid"></em>
                                <span data-localize="sidebar.nav.SINGLEVIEW">Dashboard</span>
                                </Link>
                            </li>

                            <li className={ this.routeActive(['leadlist']) ? 'active' : '' }>
                                <div className="nav-item" onClick={ this.toggleItemCollapse.bind(this, 'submenu') }>
                                    <div className="pull-right label label-info">1</div>
                                    <em className="icon-chemistry"></em>
                                    <span data-localize="sidebar.nav.MENU">Leads</span>
                                </div>
                                <Collapse in={ this.state.collapse.submenu } timeout={ 100 }>
                                    <ul id="submenu" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Leads</li>
                                        <li className={ this.routeActive('leadlist') ? 'active' : '' }>
                                            <Link to="leadlist" title="Lead List">
                                            <span data-localize="sidebar.nav.SUBMENU">List</span>
                                            </Link>
                                        </li>

                                        <li className={ this.routeActive('newLeads') ? 'active' : '' }>
                                            <Link to="newLeads" title="New Leads">
                                                <span data-localize="sidebar.nav.SUBMENU">New</span>
                                            </Link>
                                        </li>


                                        <li className={ this.routeActive('dummyLeadDetails') ? 'active' : '' }>
                                            <Link to="dummyLeadDetails" title="Lead Details">
                                                <span data-localize="sidebar.nav.SUBMENU">Details</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>

                            <li className={ this.routeActive('singleview') ? 'active' : '' }>
                                <Link to="singleview" title="Single View">
                                    <em className="icon-energy"></em>
                                    <span data-localize="sidebar.nav.SINGLEVIEW">Opportunities</span>
                                </Link>
                            </li>

                            <li className={ this.routeActive('singleview') ? 'active' : '' }>
                                <Link to="singleview" title="Single View">
                                    <em className="icon-organization"></em>
                                    <span data-localize="sidebar.nav.SINGLEVIEW">Accounts</span>
                                </Link>
                            </li>

                            <li className={ this.routeActive('singleview') ? 'active' : '' }>
                                <Link to="singleview" title="Single View">
                                    <em className="icon-people"></em>
                                    <span data-localize="sidebar.nav.SINGLEVIEW">Contacts</span>
                                </Link>
                            </li>

                            <li className={ this.routeActive('singleview') ? 'active' : '' }>
                                <Link to="singleview" title="Single View">
                                    <em className="icon-magnet"></em>
                                    <span data-localize="sidebar.nav.SINGLEVIEW">Campaigns</span>
                                </Link>
                            </li>

                        </ul>
                        { /* END sidebar nav */ }
                    </nav>
                </div>
                { /* END Sidebar (left) */ }
            </aside>
            );
    }

}

export default withRouter(Sidebar);

