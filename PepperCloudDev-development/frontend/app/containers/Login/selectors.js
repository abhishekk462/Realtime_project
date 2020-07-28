/**
 * Loginpage selectors
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => {
  // console.log('..statesssss', state, state.get('login'));
  return state.get('login');
};

const makeSelectFormState = () => createSelector(
  selectLogin,
  (loginState) => {
    //  console.log('loginState' , loginState);
   return loginState;
  }
);

export {
  selectLogin,
  makeSelectFormState,
};
