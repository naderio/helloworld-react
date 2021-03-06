/**
 * State
 *
 * This module is for state definition
 */

import * as Activity from '../Activity/state';
import * as Shared from '../Shared/state';
import * as Auth from '../Auth/state';
import * as Session from '../Session/state';
import * as Home from '../Home/state';

const $state = {
  Activity,
  Shared,
  Auth,
  Session,
  Home,
};

export default $state;

/**
 * @typedef {Object} GlobalState
 * @property {Activity.ActivityState} Activity
 * @property {Shared.SharedState} Shared
 * @property {Auth.AuthState} Auth
 * @property {Session.SessionState} Session
 * @property {Home.HomeState} Home
 */
