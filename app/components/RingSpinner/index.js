/**
 *
 * RingSpinner
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';
// import styled from 'styled-components';

class RingSpinner extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <RingLoader
        color={'#123abc'}
        loading={this.props.loading}
      />
    );
  }
}

RingSpinner.propTypes = {
  loading: PropTypes.object,
};

export default RingSpinner;
