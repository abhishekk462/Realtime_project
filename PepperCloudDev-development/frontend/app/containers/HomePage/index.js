/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import ContentWrapper from 'components/Layout/ContentWrapper';
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {makeSelectUsername} from './selectors';
import { Button,Grid, Row, Col, Dropdown, MenuItem, OverlayTrigger } from 'react-bootstrap';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/Base/selectors';

import * as user1 from 'assets/img/user1.png';
import * as user2 from 'assets/img/user2.png';

import {ResponsiveContainer,AreaChart,Area, BarChart, Bar,LineChart, Line ,XAxis,YAxis, CartesianGrid, Tooltip,Legend} from 'recharts';

import messages from './messages';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  shouldComponentUpdate() {
    return false;
  }





  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
    //this.loadFbLoginApi();

  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

  // temp codes

    const workingHourData = [
      {name: 'Aljunied', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Bartley', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Bukit Timah', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Chinatown', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Kallang', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Little India', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Mount Faber', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Orchard Road', uv: 3780, pv: 3908, amt: 2000},
      {name: 'Raffles', uv: 4290, pv: 4800, amt: 2181},

    ];


  // temp code


    const tooltip = function(text) {
      return (
        <div id="tooltip">{text}</div>
      );
    };

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
          <small data-localize="dashboard.WELCOME"></small>
        </div>
        <Row>
          <Col xs={12} className="text-center">
            <br/>

            <Row>
              <Col lg={ 4 }>
                { /* START List group */ }
                <ul className="list-group">
                  <li className="list-group-item">
                    <Row className="row-table pv-lg">
                      <Col xs={ 6 }>
                        <p className="m0 lead">1029</p>
                        <p className="m0">
                          <small>New Customers this month</small>
                        </p>
                      </Col>
                      <Col xs={ 6 } className="text-center">
                        <LineChart width={300} height={100} data={workingHourData}>
                          <Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
                        </LineChart>
                      </Col>
                    </Row>
                  </li>
                  <li className="list-group-item">
                    <Row className="row-table pv-lg">
                      <Col xs={ 6 }>
                        <p className="m0 lead">$ 3,200.00</p>
                        <p className="m0">
                          <small>Available budget</small>
                        </p>
                      </Col>
                      <Col xs={ 6 } className="text-center">
                        <BarChart width={150} height={40} data={workingHourData}>
                          <Bar dataKey='uv' fill='#4d4d4d'/>
                        </BarChart>
                      </Col>
                    </Row>
                  </li>
                  <li className="list-group-item">
                    <Row className="row-table pv-lg">
                      <Col xs={ 6 }>
                        <p className="m0 lead">67</p>
                        <p className="m0">
                          <small>Active on Social Media</small>
                        </p>
                      </Col>
                      <Col xs={ 6 }>
                        <ul className="list-inline text-center">
                          <li>
                            <OverlayTrigger placement="top" overlay={tooltip('Katie')}>
                              <img src={user1} alt="Follower" className="img-responsive img-circle thumb24" />
                            </OverlayTrigger>
                          </li>
                          <li>
                            <OverlayTrigger placement="top" overlay={tooltip("Cody")}>
                              <img src={user2} alt="Follower" className="img-responsive img-circle thumb24" />
                            </OverlayTrigger>
                          </li>
                          <li>
                            <OverlayTrigger placement="top" overlay={tooltip("Tamara")}>
                              <img src={user1} alt="Follower" className="img-responsive img-circle thumb24" />
                            </OverlayTrigger>
                          </li>
                          <li>
                            <OverlayTrigger placement="top" overlay={tooltip("Gene")}>
                              <img src={user1} alt="Follower" className="img-responsive img-circle thumb24" />
                            </OverlayTrigger>
                          </li>
                          <li>
                            <OverlayTrigger placement="top" overlay={tooltip("Marsha")}>
                              <img src={user1} alt="Follower" className="img-responsive img-circle thumb24" />
                            </OverlayTrigger>
                          </li>
                          <li>
                            <OverlayTrigger placement="top" overlay={tooltip("Robin")}>
                              <img src={user2} alt="Follower" className="img-responsive img-circle thumb24" />
                            </OverlayTrigger>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </li>
                </ul>
                { /* END List group */ }
              </Col>
              <Col lg={ 8 }>
                { /* START bar chart */ }
                <div id="panelChart3" className="panel">
                  <div className="panel-heading">
                    { /* START button group */ }
                    <div className="pull-right btn-group">
                      <button type="button" data-toggle="dropdown" className="dropdown-toggle btn btn-default btn-sm">Monthly</button>
                      <ul role="menu" className="dropdown-menu fadeInLeft animated">
                        <li><a href="#">Daily</a>
                        </li>
                        <li><a href="#">Monthly</a>
                        </li>
                        <li><a href="#">Yearly</a>
                        </li>
                      </ul>
                    </div>
                    { /* END button group */ }
                    <div className="panel-title">Average Sell per Location</div>
                  </div>
                  <div className="panel-wrapper">
                    <div className="panel-body">
                      <div className="indicator show">
                        <span className="spinner"></span>
                      </div>


                      <LineChart width={800} height={400} data={workingHourData}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <XAxis dataKey="name" />
                        <Tooltip/>

                        <CartesianGrid stroke="#f5f5f5" />
                      </LineChart>

                    </div>
                  </div>
                </div>
                { /* END bar chart */ }
              </Col>
            </Row>
            <div className="unwrap mv-lg">
              { /* START chart */ }
              <div id="panelChart9" className="panel">
                <div className="panel-heading">
                  { /* START button group */ }
                  <div className="pull-right btn-group">
                    <button type="button" data-toggle="dropdown" className="dropdown-toggle btn btn-default btn-sm">All time</button>
                    <ul role="menu" className="dropdown-menu fadeInLeft animated">
                      <li><a href="#">Daily</a>
                      </li>
                      <li><a href="#">Monthly</a>
                      </li>
                      <li className="divider"></li>
                      <li><a href="#">All time</a>
                      </li>
                    </ul>
                  </div>
                  { /* END button group */ }
                  <div className="panel-title">Overall Growth</div>
                </div>
                <div className="panel-wrapper">
                  <div className="panel-body">

                    <AreaChart width={1076} height={400} data={workingHourData}
                               margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                      <XAxis dataKey="name"/>
                      <YAxis/>
                      <CartesianGrid strokeDasharray="3 3"/>
                      <Tooltip/>
                      <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#348AC7' />
                    </AreaChart>

                  </div>
                  <div className="panel-body">
                    <Row>
                      <Col sm={ 3 } xs={ 6 } className="text-center">
                        <p>Stores</p>
                        <div className="h1">25</div>
                      </Col>
                      <Col sm={ 3 } xs={ 6 } className="text-center">
                        <p>Employees</p>
                        <div className="h1">85</div>
                      </Col>
                      <Col sm={ 3 } xs={ 6 } className="text-center">
                        <p>Hours</p>
                        <div className="h1">380</div>
                      </Col>
                      <Col sm={ 3 } xs={ 6 } className="text-center">
                        <p>Sale</p>
                        <div className="h1">$ 10,786.00</div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              { /* END chart */ }
            </div>
            { /* START radial charts */ }

            { /* START radial charts */ }
            { /* START Multiple List group */ }
            <div className="list-group">
              <a href="javascript:void(0)" className="list-group-item">
                <table className="wd-wide">
                  <tbody>
                  <tr>
                    <td className="wd-xs">
                      <div className="ph">
                        <img src={user1} alt="" className="media-box-object img-responsive img-rounded thumb64" />
                      </div>
                    </td>
                    <td>
                      <div className="ph">
                        <h4 className="media-box-heading">Mr Tarun</h4>
                        <small className="text-muted">Business Head for South Zone</small>
                      </div>
                    </td>
                    <td className="wd-sm hidden-xs hidden-sm">
                      <div className="ph">
                        <p className="m0">Last change</p>
                        <small className="text-muted">4 weeks ago</small>
                      </div>
                    </td>
                    <td className="wd-xs hidden-xs hidden-sm">
                      <div className="ph">
                        <p className="m0 text-muted">
                          <em className="icon-users mr fa-lg"></em>26</p>
                      </div>
                    </td>
                    <td className="wd-xs hidden-xs hidden-sm">
                      <div className="ph">
                        <p className="m0 text-muted">
                          <em className="icon-doc mr fa-lg"></em>3500</p>
                      </div>
                    </td>
                    <td className="wd-sm">
                      <div className="ph">
                        <progressbar value="80" type="success" className="m0 progress-xs">80%</progressbar>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </a>
            </div>
            <div className="list-group">
              <a href="#" className="list-group-item">
                <table className="wd-wide">
                  <tbody>
                  <tr>
                    <td className="wd-xs">
                      <div className="ph">
                        <img src={user2} alt="" className="media-box-object img-responsive img-rounded thumb64" />
                      </div>
                    </td>
                    <td>
                      <div className="ph">
                        <h4 className="media-box-heading">Ms Stacy</h4>
                        <small className="text-muted">Regional Head East Coast</small>
                      </div>
                    </td>
                    <td className="wd-sm hidden-xs hidden-sm">
                      <div className="ph">
                        <p className="m0">Last change</p>
                        <small className="text-muted">Today at 06:23 am</small>
                      </div>
                    </td>
                    <td className="wd-xs hidden-xs hidden-sm">
                      <div className="ph">
                        <p className="m0 text-muted">
                          <em className="icon-users mr fa-lg"></em>3</p>
                      </div>
                    </td>
                    <td className="wd-xs hidden-xs hidden-sm">
                      <div className="ph">
                        <p className="m0 text-muted">
                          <em className="icon-doc mr fa-lg"></em>150</p>
                      </div>
                    </td>
                    <td className="wd-sm">
                      <div className="ph">
                        <progressbar value="50" type="purple" className="m0 progress-xs">50%</progressbar>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </a>
            </div>




          </Col>
        </Row>

      </ContentWrapper>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
