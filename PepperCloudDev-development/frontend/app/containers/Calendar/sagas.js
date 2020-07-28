// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

import {
  SAVE_EVENT,
  CHANGE_FORM,
  REQUEST_ERROR
} from './constants';


/**
 * Save Event in saga
 */
export function * saveEvent () {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {

    console.log('Save Event saga', data);
    // And we're listening for `SAVE_EVENT` actions and destructuring its payload
    /*let request = yield take(SAVE_EVENT);
    let {username, password} = request.data;

    let save = yield race({
      save: call(authorize, {username, password, isRegistering: false}),
    });

    // If `authorize` was the winner...
    if (winner.save) {
      // ...we send Redux appropiate actions
      console.log('response on save event is', response);
      //yield put({type: SET_AUTH, newAuthState: true});// User is logged in (authorized)
      //yield put({type: CHANGE_FORM, newFormState: {username: '', password: ''}}) // Clear form

      forwardTo('/'); // Go to dashboard page*/
      // If `logout` won...
    //} else {
      // ...we send Redux appropiate action
      forwardTo('/'); // Go to root page
    //}
  }
}

// All sagas to be loaded
export default [
  defaultSaga, saveEvent,
];
