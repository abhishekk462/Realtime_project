/*
 * LoginConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'componentName' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'app/container/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_FORM = 'CHANGE_FORM';
export const SET_AUTH = 'SET_AUTH';
export const SENDING_REQUEST = 'SENDING_REQUEST';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const LOGOUT = 'LOGOUT';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
