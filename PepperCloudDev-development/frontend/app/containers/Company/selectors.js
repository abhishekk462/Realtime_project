import { createSelector } from 'reselect';

/**
 * Direct selector to the company state domain
 */
const selectCompanyDomain = () => (state) => state.get('company');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Company
 */

const makeSelectCompany = () => createSelector(
  selectCompanyDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCompany;
export {
  selectCompanyDomain,
};
