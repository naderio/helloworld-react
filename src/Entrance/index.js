import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import LogoImage from '../assets/logo.png';

import LoginView from './LoginView';
import SignupView from './SignupView';
import PasswordResetView from './PasswordResetView';

import SharedStyles from '../styles/shared.module.css';
import styles from './index.module.css';

function Entrance() {
  return (
    <div className={styles.container}>
      <img src={LogoImage} alt="logo" />

      <div className={SharedStyles.spacer} />

      <Switch>
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/signup" component={SignupView} />
        <Route exact path="/password-reset" component={PasswordResetView} />
        <Redirect exact from="/*" to="/login" />
      </Switch>
    </div>
  );
}

export default Entrance;
