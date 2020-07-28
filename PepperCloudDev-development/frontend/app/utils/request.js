import 'whatwg-fetch';
import {browserHistory} from 'react-router';

let localStorage;

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage');
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage;
}

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if(response.status == 401){
    console.log('hhh');
    browserHistory.push('/login'); // Go to root page
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export  function request(url, options) {
  let tokenString = localStorage.token;
  //console.log('token is' , tokenString);
  let token;
  if(!!tokenString){
    token = JSON.parse(tokenString).access_token;
  }

  options = options || {};

  let requestData = {
    method: 'GET',
    headers: {
      'Authorization':'Bearer '+token
    }
  };

  options = Object.assign(options,requestData);

 // console.log('options' ,options);

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

export  function get(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}



export function postData(url, data) {

  let tokenString = localStorage.token;
  //console.log('token is' , tokenString);
  let token;
  if(!!tokenString){
    token = JSON.parse(tokenString).access_token;
  }


  let options = {
    method: 'POST',
    headers: {
      'Authorization':'Bearer '+token,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  };


  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

export function post(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}


export default { request, post,get ,postData}
