import React, {Component, PropTypes as T } from 'react';
import {connect} from 'react-redux';
import { Button,ButtonToolbar ,Checkbox,Row,Col} from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { loadFbLoginApi } from 'utils/social';
import ErrorMessage from 'components/Common/ErrorMessage';

import {loginRequest,changeForm} from './actions';

import {makeSelectFormState}  from './selectors';
import auth from './authService';


import styles from './login.css';


class Login extends Component {
  constructor (props) {
    super(props)

    this._login = this._login.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._changeUsername = this._changeUsername.bind(this);
    this._changePassword = this._changePassword.bind(this);
    //init fb
    loadFbLoginApi();

  }

  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    data: T.object,
    history: T.object,
    dispatch: T.func
  }

  loginWithGoogle() {
    this.props.auth.loginWithGoogle();
  }


  loginWithTwitter() {
    this.props.auth.loginWithTwitter();
  }

  loginWithFacebook() {

    console.log('props is',this.props);

    this.checkLoginState();
  }


  statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      console.log('fb response is' , response);

      FB.api('/me?fields=id,name,email', function(meRes) {
        console.log('Successful login for: ' + meRes);
        let reqData = Object.assign(response,meRes);
        console.log('data is', reqData);
        auth.fblogin(reqData).then(res => {
          console.log('rrr',res);
        });


      });



    } else if (response.status === 'not_authorized') {
      console.log("Please log into this app.");
    } else {
      console.log("Please log into this facebook.");
      Fb.login((res)=> {
        console.log('login reattempted',login);
      });
    }
  }

  checkLoginState() {
    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  }





  render () {
    let {dispatch} = this.props;
   // console.log('in render', this.props);
    let {formState,currentlySending, error} = this.props.data;
    //console.log('form state is' ,formState);
    // let formState= {
    //   username: '', //
    //   password: ''
    // } ;
    /*
     .widget-login {
     padding: 30px;

    background-color: rgba(256, 256, 256, 0.9);
    box-shadow: 0px 0px 20px 1px black;
    border-radius: 20px;
  }
     */

    console.log('styles is', styles);

    return (
      <div className={styles.container} >
        <main id="content" className={styles.loginContainer} role="main">

              <h5 className="widget-login-logo animated fadeInUp">

              </h5>
              <section  className={styles.styleBox}>
                <header>
                  <h5 className="widget-login-logo animated fadeInUp">
                    <label className="h3">Pepper Cloud </label>
                    { /* <img style={{maxWidth:200}} src="assets/img/0.jpeg" alt="PepperCloud"/> */ }
                  </h5>

                </header>
                <div className="widget-body">

                  <form  id="login-form" className="smart-form client-form" onSubmit={this._onSubmit} role="form">
                    <header>
                      {error ? <ErrorMessage error={error} /> : null}
                    </header>

                    <fieldset>



                      <div className="form-group">
                        <label className=" form-control-label text-md-right" >Username</label>


                          <input id="username"
                                 className={styles.formControlLogin}
                                 type="text"
                                 name="username"
                                 value={this.props.data.username}
                                 onChange={this._changeUsername}
                                 autoCorrect='off'
                                 autoCapitalize='off'
                                 style={{backgroundColor:'none'}}
                                 spellCheck='false'
                                 required />


                      </div>


                      <div className="form-group">
                        <label className="form-control-label text-md-right" htmlFor="email">Password</label>

                          <input type="password"
                                 className={styles.formControlLogin}
                                 id="inputPassword"
                                 value={this.props.data.password}
                                 style={{backgroundColor:'none'}}
                                 name="password"
                                 onChange={this._changePassword}
                                  required/>


                      </div>

                    </fieldset>


                      <Row >

                      <Col lg={4}>
                      <button type="submit" className="btn  btn-warning">
                        Sign in
                      </button>
                      </Col>

                        <Col lg={6}>
                          <div className="checkbox">
                            <input type="checkbox" id="checkbox1"/>
                            <label htmlFor="checkbox1">
                              Remember Me
                            </label>
                          </div>
                        </Col>





                      </Row>

                    <Row >

                      <Col lgOffset={4} lg={4}>
                        <Button bsStyle="link">Sign up</Button>
                      </Col>


                      <Col  lg={4}>
                        <Button bsStyle="link">Forgot Password</Button>
                      </Col>

                    </Row>




                  </form>
                </div>
              </section>

          <Row>
            <Col lg={1}>
              &nbsp;
            </Col>
            <Col lg={11}>
            <ButtonToolbar style={{paddingTop:10}}>


              <button className="btn  btn-social btn-twitter" onClick={this.loginWithTwitter.bind(this)}>
                <em className="fa fa-twitter"></em> Sign in with Twitter
              </button>

              <button className="btn  btn-social btn-facebook" onClick={this.loginWithFacebook.bind(this)}>
                <em className="fa fa-facebook"></em> Sign in with Facebook
              </button>
            </ButtonToolbar>
              </Col>
          </Row>



        </main>

      </div>


    )
  }


  _changeUsername (event) {
    this._emitChange({...this.props.data.formState, username: event.target.value})
  }

  _changePassword (event) {
    this._emitChange({...this.props.data.formState, password: event.target.value})
  }

  _emitChange (newFormState) {
    this.props.dispatch(changeForm(newFormState))
  }

  _onSubmit(event){
    event.preventDefault();
    console.log('finally', this.props.data.formState.username)
    this._login(this.props.data.formState.username,this.props.data.formState.password);
  }

  _login (username, password) {
    this.props.dispatch(loginRequest({username, password}))
  }
}



// Which props do we want to inject, given the global state?
function select (state) {
  console.log('in select state', state);
  return {
    data: state
  }
}


const mapStateToProps = createStructuredSelector({

  data: makeSelectFormState(),
});

// Wrap the component to inject dispatch and state into it
//export default connect(select)(Login)


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(Login);
