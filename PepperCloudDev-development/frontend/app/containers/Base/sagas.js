// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import {browserHistory} from 'react-router';
import {take, call, put, fork, race} from 'redux-saga/effects';

import coreService from 'services/coreService';

import {
  LOAD_MENU_REQUEST,
  SIDEBAR_PAGE_REQUEST,
  SIDEBAR_PAGE_ERROR
} from './constants'

import {
  menusLoaded
} from './actions'


/**
 * load menus in saga
 */
export function * loadMenuFlow () {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  //while (true) {
    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    yield take(LOAD_MENU_REQUEST);

    console.log('loading sidebar...');
    // We tell Redux we're in the middle of a request
    yield put({type: SIDEBAR_PAGE_REQUEST, sending: true});

    try{

    let response = yield call(coreService.loadMenus);
    // ...we send Redux appropriate actions
    yield put(menusLoaded(response));

    } catch (error) {
      yield put({type: SIDEBAR_PAGE_ERROR, error: error.message});

    } finally {
      yield put({type: SIDEBAR_PAGE_REQUEST, sending: false});
    }
  //}
}



// Bootstrap sagas
export default [
  loadMenuFlow
];
