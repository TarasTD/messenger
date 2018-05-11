
import { fromJS } from 'immutable';
import messageViewReducer from '../reducer';

describe('messageViewReducer', () => {
  it('returns the initial state', () => {
    expect(messageViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
