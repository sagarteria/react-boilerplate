import { createSelector } from 'reselect';

/**
 * Direct selector to the paymentGateway state domain
 */
const selectPaymentGatewayDomain = (state) => state.get('paymentGateway');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PaymentGateway
 */

const makeSelectPaymentGateway = () => createSelector(
  selectPaymentGatewayDomain,
  (substate) => substate.toJS()
);

export default makeSelectPaymentGateway;
export {
  selectPaymentGatewayDomain,
};
