import request from 'utils/request';

let localStorage;

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage');
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage;
}

let saveEvent = {
  /**
   * Logs a user in, returning a promise with `true` when done
   * @param  {string} username The username of the user
   * @param  {string} password The password of the user
   */
  /*save (username, password) {
    if (auth.loggedIn()) return Promise.resolve(true);

    var data = "username=" +  encodeURIComponent(username) + "&password="
      + encodeURIComponent('admin') + "&grant_type=password";

    let requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": "Basic d2ViX2FwcDo="
      },
      body : data
    };

  },*/


  onChange () {}
};

export default saveEvent
