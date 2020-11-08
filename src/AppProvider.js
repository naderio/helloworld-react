import React from 'react';
import { Provider as StateProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider as ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import * as PropTypes from './common/proptypes';

import { THEME, CssVariables } from './common/styles';

function AppProvider({ store, children }) {
  return (
    <StateProvider store={store}>
      <ThemeProvider theme={THEME}>
        <React.Fragment>
          <CssBaseline />
          <CssVariables />
          <Router>{children}</Router>
        </React.Fragment>
      </ThemeProvider>
    </StateProvider>
  );
}

AppProvider.propTypes = {
  store: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default AppProvider;
