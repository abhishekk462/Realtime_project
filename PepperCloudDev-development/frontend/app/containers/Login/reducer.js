/*
 * The reducer takes care of state changes in the Login Container through actions
 */

import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR
} from './constants'
import auth from './authService'

// The initial application state
let initialState = {
  formState: {
    username: '',
    password: ''
  },
  error: '',
  currentlySending: false,
  loggedIn: auth.loggedIn()
};

// Takes care of changing the application state
function reducer(state = initialState, action) {

  // console.log("in reducer", action);

  switch (action.type) {
    case CHANGE_FORM:
      // console.log({...state, formState: action.newFormState});
      return {...state, formState: action.newFormState};
    case SET_AUTH:
      return {...state, loggedIn: action.newAuthState};
    case SENDING_REQUEST:
      return {...state, currentlySending: action.sending};
    case REQUEST_ERROR:
      console.error({...state, error: action.error});
      return {...state, error: action.error};
    case CLEAR_ERROR:
      return {...state, error: ''};
    default:
      return state;
    // console.log('nothing here');
  }
}

export default reducer;
