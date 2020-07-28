import React from 'react';
import { Router, Route, Link, History, withRouter } from 'react-router';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Collapse } from 'react-bootstrap';
import auth from 'containers/Login/authService';

import { makeSelectSidebar } from 'containers/Base/selectors';

import {
  loadMenus
} from 'containers/Base/actions';

class Sidebar extends React.Component {

  constructor(props, context) {
    super(props, context);



    this.state = {
      userBlockCollapse: false,
      collapse: {}
    };

  };

  componentDidMount() {
    //console.log('sidebar data is ',this.props.data);
  }

  navigator(route) {
    this.props.router.push(route)
  }

  componentWillMount() {
    this.props.dispatch(loadMenus());
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

    let menus = this.props.menus;
    //console.log('menus are', menus);

    let menuConent = (<div/>);

      if(menus  instanceof Array ) {
        menuConent = menus.map((menu)=> {

          let menuItemContent = (
            <li key={'s-menu-'+menu.menuId}  className={ this.routeActive(''+menu.screenId) ? 'active' : '' }>
            <Link to={ menu.url} title={menu.engLabel}>
              <em className={menu.iconClass}/>
              <span data-localize={menu.labelKey}>{menu.engLabel}</span>
            </Link>
              </li>
          );

          if(menu.childrens && menu.childrens.length > 0){

            let menuChildContent = menu.childrens.map((child)=> (

              <li key={'s-menu-'+child.menuId} className={ this.routeActive(''+child.screenId) ? 'active' : '' }>
                <Link to={'/page/'+ child.screenId} title={child.engLabel}>
                  <em className="fa fa-minus"/>
                  <span data-localize={child.labelKey}>{child.engLabel}</span>
                </Link>
              </li>

            ));

            menuItemContent = (
              <li key={'s-menu-'+menu.menuId} className={ this.routeActive(''+menu.screenId) ? 'active' : '' }>
                <div className="nav-item" onClick={ this.toggleItemCollapse.bind(this, menu.menuId) }>
                  {/*<div className="pull-right label label-info">1</div>*/}
                  <em className={menu.iconClass}></em>
                  <span data-localize={menu.labelKey}>{menu.engLabel}</span>
                </div>
                <Collapse in={ this.state.collapse[menu.menuId] } timeout={ 100 }>
                  <ul id="submenu" className="nav sidebar-subnav">
                    {menuChildContent}
                  </ul>
                 </Collapse>
              </li>
            )
          }

          return (
            menuItemContent
        )});
      }

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

                <li className={ this.routeActive('') ? 'active' : '' }>
                  <Link to="/" title="Widgets">

                    <em className="icon-speedometer"></em>
                    <span data-localize="sidebar.nav.WIDGETS">Dashboard</span>
                  </Link>
                </li>

                {menuConent}



              </ul>
              { /* END sidebar nav */ }
            </nav>
          </div>
          { /* END Sidebar (left) */ }
        </aside>
      );
  }

}

const mapStateToProps = createStructuredSelector({
  menus: makeSelectSidebar(),
});


export default connect(mapStateToProps)(withRouter(Sidebar));

