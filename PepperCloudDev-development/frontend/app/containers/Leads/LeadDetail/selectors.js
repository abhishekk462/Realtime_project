import { createSelector } from 'reselect';

/**
 * Direct selector to the appGenerator state domain
 */
const selectLeadDetailDomain = () => (state) => state.get('leadDetail');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LeadDetail
 */

const makeSelectLeadDetail = () => createSelector(
  selectLeadDetailDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLeadDetail;
export {
  selectLeadDetailDomain,
};
