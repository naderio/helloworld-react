import React from 'react';
import { connect } from 'react-redux';

import * as PropTypes from '../common/proptypes';

import { RELEASE_VERSION } from '../common/config';

const withStore = connect((state) => ({}));

const propTypes = {
  ...PropTypes.withRouting,
  ...PropTypes.withState,
};

const Wrapper = (C) => withStore(C);

function AboutView() {
  return (
    <div>
      Release:
      {RELEASE_VERSION}
    </div>
  );
}

AboutView.propTypes = propTypes;

export default Wrapper(AboutView);
