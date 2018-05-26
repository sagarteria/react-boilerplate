/**
 *
 * PaymentGateway
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPaymentGateway from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class PaymentGateway extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>PaymentGateway</title>
          <meta name="description" content="Description of PaymentGateway" />
        </Helmet>
        <button style={{ background: 'green' }}>
          <a href="https://www.instamojo.com/@sagarteria/ld3ab8d6cfdca4770a70b09591be0ac45/" rel="im-checkout">
          Pay with Instamojo
          </a>
        </button>
      </div>
    );
  }
}

PaymentGateway.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  paymentgateway: makeSelectPaymentGateway(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'paymentGateway', reducer });
const withSaga = injectSaga({ key: 'paymentGateway', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PaymentGateway);
