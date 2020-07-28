
import { fromJS } from 'immutable';
import leadDetailReducer from '../reducer';

describe('LeadDetailReducer', () => {
  it('returns the initial state', () => {
    expect(leadDetailReducer(undefined, {})).toEqual(fromJS({}));
  });
});
