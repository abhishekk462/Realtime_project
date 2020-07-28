
import { fromJS } from 'immutable';
import companyReducer from '../reducer';

describe('companyReducer', () => {
  it('returns the initial state', () => {
    expect(companyReducer(undefined, {})).toEqual(fromJS({}));
  });
});
