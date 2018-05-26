
import { fromJS } from 'immutable';
import paymentGatewayReducer from '../reducer';

describe('paymentGatewayReducer', () => {
  it('returns the initial state', () => {
    expect(paymentGatewayReducer(undefined, {})).toEqual(fromJS({}));
  });
});
