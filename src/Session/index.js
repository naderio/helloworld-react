import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect, Link as RouterLink, useLocation } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';

import * as Interaction from '../Shared/Interaction';

import { toolbarContainerRef, bodyContainerRef } from '../Shared/Registry';

import ProfileView from './ProfileView';
import HomeRouter from '../Home';

import { logout } from '../Auth/state';

import SharedStyles from '../styles/shared.module.css';

const NAVIGATION_MENU_ITEMS = [
  {
    title: 'Home',
    icon: 'home',
    route: '/home',
  },
  {
    title: 'Profile',
    icon: 'account_circle',
    route: '/profile',
  },
];

function Session() {
  const dispatch = useDispatch();

  const processing = useSelector((state) => state.Activity.processing);

  const userAccount = useSelector((state) => state.Auth.userAccount);

  const location = useLocation();

  const [navigationMenuDrawerOpen, setNavigationMenuDrawerOpen] = React.useState(false);

  const doLogout = React.useCallback(() => {
    dispatch(logout())
      .then(() => Interaction.toast({ type: Interaction.SUCCESS, content: 'Goodbye!' }))
      .catch((error) =>
        Interaction.toast({
          type: Interaction.FAILURE,
          content: error.message,
        }),
      );
  }, [dispatch]);

  const openNavigationMenuDrawer = React.useCallback(() => setNavigationMenuDrawerOpen(true), []);
  const closeNavigationMenuDrawer = React.useCallback(() => setNavigationMenuDrawerOpen(false), []);

  return (
    <div className={SharedStyles.flex}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton color="inherit" onClick={openNavigationMenuDrawer}>
            <Icon>menu</Icon>
          </IconButton>

          <div className={SharedStyles.spacer} />

          <Typography variant="h6" color="inherit">
            Home
          </Typography>

          <div className={SharedStyles.flex} />

          {processing && <CircularProgress color="inherit" size={24} />}

          <div ref={toolbarContainerRef} />
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={navigationMenuDrawerOpen}
        onClose={closeNavigationMenuDrawer}
        onOpen={openNavigationMenuDrawer}
        onClick={closeNavigationMenuDrawer}
      >
        <ListItem>
          <Avatar alt={userAccount.name} src={userAccount.picture} />
          <ListItemText primary={userAccount.name} secondary={userAccount.email} />
        </ListItem>

        <Divider />

        {NAVIGATION_MENU_ITEMS.map((navigationMenuItem) => (
          <ListItem
            key={navigationMenuItem.route}
            dense
            button
            selected={navigationMenuItem.route === location.pathname}
            component={RouterLink}
            to={navigationMenuItem.route}
          >
            <ListItemIcon>
              <Icon>{navigationMenuItem.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={navigationMenuItem.title} />
          </ListItem>
        ))}

        <ListItem dense button onClick={doLogout}>
          <ListItemIcon>
            <Icon>exit_to_app</Icon>
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      </SwipeableDrawer>

      <main className={SharedStyles.relative}>
        <Switch>
          <Route path="/home" component={HomeRouter} />
          <Route exact path="/profile" component={ProfileView} />
          <Redirect exact from="/*" to="/home" />
        </Switch>
      </main>

      <div ref={bodyContainerRef} />
    </div>
  );
}

export default Session;
