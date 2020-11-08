import React from 'react';
import cx from 'classnames';

import CircularProgress from '@material-ui/core/CircularProgress';

import LogoImage from '../assets/logo.png';

import SharedStyles from '../styles/shared.module.css';
import styles from './LandingView.module.css';

function LandingView() {
  return (
    <div className={cx(SharedStyles.fitContainer, SharedStyles.flexCenter, styles.container)}>
      <img src={LogoImage} alt="logo" />

      <CircularProgress />
    </div>
  );
}

export default LandingView;
