import request from 'utils/request';

let localStorage;

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage');
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage;
}

let auth = {
  /**
   * Logs a user in, returning a promise with `true` when done
   * @param  {string} username The username of the user
   * @param  {string} password The password of the user
   */
  login (username, password) {
    if (auth.loggedIn()) return Promise.resolve(true);

    var data = "username=" +  encodeURIComponent(username) + "&password="
      + encodeURIComponent('admin') + "&grant_type=password";

    console.log("#" + data + "#");

    let requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": "Basic d2ViX2FwcDo="
      },
      body : data
    };

    // Post a fake request
    return request.post('/uaa/oauth/token', requestData)
      .then(response => {
        console.log('response received',response);
        // Save token to local storage
       // if(response.status == 200)
        localStorage.token = JSON.stringify(response);
        return Promise.resolve(true)
      })
  },

  fblogin(data){

    let requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Basic d2ViX2FwcDo="
      },
      body : JSON.stringify(data)
    };

    return request.post('/uaa/api/fbtoken', requestData)
      .then(response => {
        console.log('response received',response);
        // Save token to local storage
        // if(response.status == 200)
        localStorage.token = JSON.stringify(response);
        return Promise.resolve(true)
      })

  },
  /**
   * Logs the current user out
   */
  logout () {

    return new Promise((resolve, reject) => {
      localStorage.removeItem('token');
      resolve(true)
    });

    //return request.post('/uaa/oauth/revoke')
  },
  /**
   * Checks if a user is logged in
   */
  loggedIn () {
    return !!localStorage.token
  },
  /**
   * Registers a user and then logs them in
   * @param  {string} username The username of the user
   * @param  {string} password The password of the user
   */
  register (username, password) {
    // Post a fake request
    return request.post('/register', {username, password})
    // Log user in after registering
      .then(() => auth.login(username, password))
  },
  onChange () {}
};

export default auth
