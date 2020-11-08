import React from 'react';

import { useSelector } from 'react-redux';

import LandingView from './Entrance/LandingView';
import Entrance from './Entrance';
import Session from './Session';

function App() {
  const appReady = useSelector((state) => state.Shared.appReady);
  const appInSession = useSelector((state) => state.Shared.appInSession);
  const authenticated = useSelector((state) => state.Auth.authenticated);

  if (!appReady || (authenticated && !appInSession)) {
    return <LandingView />;
  }

  return authenticated ? <Session /> : <Entrance />;
}

export default App;
