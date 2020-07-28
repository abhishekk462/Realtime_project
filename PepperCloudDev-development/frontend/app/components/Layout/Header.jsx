import React from 'react';
import pubsub from 'pubsub-js';
//import HeaderRun from './Header.run'
import { NavDropdown, MenuItem } from 'react-bootstrap';

import auth from 'containers/Login/authService';
import {browserHistory} from 'react-router';
import logoLarge from '../../assets/img/logo.png';
import logoSmall from '../../assets/img/logo-small@2x.png';

class Header extends React.Component {

    componentDidMount() {

        //HeaderRun();

    }

  handleSidebar(){
      let className = 'aside-collapsed';
      if(document.body.classList.contains(className)){
        document.body.classList.remove(className);
      }else{
        document.body.classList.add(className);
      }
  }

    toggleUserblock(e) {
        e.preventDefault();
      console.log('toggle user block',e);
        pubsub.publish('toggleUserblock');
    }

    handleLogout(e){
      auth.logout().then((res)=> {
        browserHistory.push('/login');
      });

    }

    render() {
        const ddAlertTitle = (
            <span>
                <em className="icon-bell"></em>
                <span className="label label-danger">11</span>
            </span>
        );




      const headerPage = (

        <header className="topnavbar-wrapper">
          { /* START Top Navbar */ }
          <nav role="navigation" className="navbar topnavbar">
            { /* START navbar header */ }
            <div className="navbar-header">
              <a href="javascript:void(0)" className="navbar-brand">
                <div className="brand-logo hidden-xs headerlogo" style={{ marginTop: -3}} >
                  {<img src={logoLarge} alt="Pepper Cloud" className="img-responsive" />}
                </div>
                <div className="brand-logo visible-xs" style={{width:75, height:55}} >
                  {<img src={logoSmall} alt="PPC" className="img-responsive" />}
                </div>
                <div className="brand-logo-collapsed">
                  {<img src={logoSmall} alt="PPC" className="img-responsive" />}
                </div>
              </a>
            </div>
            { /* END navbar header */ }
            { /* START Nav wrapper */ }
            <div className="nav-wrapper">
              { /* START Left navbar */ }
              <ul className="nav navbar-nav">
                <li>
                  { /* Button used to collapse the left sidebar. Only visible on tablet and desktops */ }
                  <a  href="javascript:void(0)" data-trigger-resize="" data-toggle-state="aside-collapsed" onClick={this.handleSidebar.bind(this)} className="hidden-xs">
                    <em className="fa fa-navicon"></em>
                  </a>
                  { /* Button to show/hide the sidebar on mobile. Visible on mobile only. */ }
                  <a href="javascript:void(0)" data-toggle-state="aside-toggled" data-no-persist="true" className="visible-xs sidebar-toggle">
                    <em className="fa fa-navicon"></em>
                  </a>
                </li>
                { /* START User avatar toggle */ }
                <li>
                  { /* Button used to collapse the left sidebar. Only visible on tablet and desktops */ }
                  <a  href="javascript:void(0)" id="user-block-toggle"  onClick={ this.toggleUserblock }>
                    <em className="icon-user"/>
                  </a>
                </li>
                { /* END User avatar toggle */ }
              </ul>
              { /* END Left navbar */ }
              { /* START Right Navbar */ }
              <ul className="nav navbar-nav navbar-right">
                { /* Search icon */ }
                <li>
                  <a href="javascript:void(0)" data-search-open="">
                    <em className="icon-magnifier"></em>
                  </a>
                </li>
                { /* START Alert menu */ }
                <NavDropdown noCaret eventKey={ 3 } title={ ddAlertTitle } id="basic-nav-dropdown" >

                  <MenuItem className="animated flipInX" eventKey={3.2}>Profile</MenuItem>
                  <MenuItem className="animated flipInX" eventKey={3.3}>Dashboard</MenuItem>
                  <MenuItem divider />
                  <MenuItem className="animated flipInX" eventKey={3.3} onClick={this.handleLogout}>Logout</MenuItem>
                </NavDropdown>
                { /* END Alert menu */ }
                { /* START Offsidebar button */ }
                <li>
                  <a href="javascript:void(0)" data-toggle-state="offsidebar-open" data-no-persist="true">
                    <em className="icon-notebook"></em>
                  </a>
                </li>
                { /* END Offsidebar menu */ }
              </ul>
              { /* END Right Navbar */ }
            </div>
            { /* END Nav wrapper */ }
            { /* START Search form */ }
            <form role="search" action="search.html" className="navbar-form">
              <div className="form-group has-feedback">
                <input type="text" placeholder="Type and hit enter ..." className="form-control" />
                <div data-search-dismiss="" className="fa fa-times form-control-feedback"></div>
              </div>
              <button type="submit" className="hidden btn btn-default">Submit</button>
            </form>
            { /* END Search form */ }
          </nav>
          { /* END Top Navbar */ }
        </header>
      );

      if(auth.loggedIn()){
        return headerPage;
      }else {
        return (
          <div className="hidden"> Not Logged In</div>
        );
      }

    }

}

export default Header;
