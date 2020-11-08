import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as Interaction from '../Shared/Interaction';

import { login } from '../Auth/state';

import SharedStyles from '../styles/shared.module.css';
import styles from './shared.module.css';

function LoginView() {
  const dispatch = useDispatch();

  const processing = useSelector((state) => state.Activity.processingById[login.ID] || false);

  const [data, setData] = React.useReducer((state, newState) => ({ ...state, ...newState }), {
    username: '',
    password: '',
  });

  const [error, setError] = React.useReducer((state, newState) => ({ ...state, ...newState }), {
    username: '',
    password: '',
  });

  const submit = React.useCallback(() => {
    const { username, password } = data;
    dispatch(login(username, password)).catch((error) => {
      Interaction.toast({ type: Interaction.FAILURE, content: error.message });
      setError({});
    });
  }, [dispatch, data]);

  const handleInputChange = React.useCallback((event) => {
    setData({
      [event.target.name]: event.target.value,
    });
  }, []);

  return (
    <div>
      <form className={styles.form}>
        <TextField
          variant="outlined"
          label="Email"
          name="username"
          autoComplete="current-username"
          margin="dense"
          value={data.username}
          error={!!error.username}
          helperText={error.username}
          onChange={handleInputChange}
        />

        <TextField
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          margin="dense"
          value={data.password}
          error={!!error.password}
          helperText={error.password}
          onChange={handleInputChange}
        />
      </form>

      <div className={SharedStyles.spacer} />

      <Button
        className={SharedStyles.fullWidth}
        variant="contained"
        color="primary"
        disabled={processing}
        onClick={submit}
      >
        Login
      </Button>

      <div className={SharedStyles.spacer} />

      <div className={SharedStyles.flexRow}>
        <Button className={SharedStyles.flex} component={Link} to="/password-reset">
          Password Reset
        </Button>

        <div className={SharedStyles.spacer} />

        <Button className={SharedStyles.flex} component={Link} to="/signup">
          Signup
        </Button>
      </div>
    </div>
  );
}

export default LoginView;
