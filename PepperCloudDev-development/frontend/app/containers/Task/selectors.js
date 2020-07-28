import { createSelector } from 'reselect';

/**
 * Direct selector to the task state domain
 */
const selectTaskDomain = () => (state) => state.get('task');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Task
 */

const makeSelectTask = () => createSelector(
  selectTaskDomain(),
  (substate) => substate
);

export default makeSelectTask;
export {
  selectTaskDomain,
};
