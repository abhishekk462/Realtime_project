import { createSelector } from 'reselect';

/**
 * Direct selector to the appGenerator state domain
 */
const selectToolbar = () => (state) => state.get('toolbar');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AppGenerator
 */

const makeSelectToolbar = () => createSelector(
  selectToolbar(),
  (substate) => substate//.toJS()
);

export default makeSelectToolbar;
export {
  selectToolbar,
};
