import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as Interaction from '../Shared/Interaction';

import { signup } from '../Auth/state';

import SharedStyles from '../styles/shared.module.css';
import styles from './shared.module.css';

function SignupView() {
  const dispatch = useDispatch();

  const processing = useSelector((state) => state.Activity.processingById[signup.ID] || false);

  const [data, setData] = React.useReducer((state, newState) => ({ ...state, ...newState }), {
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = React.useReducer((state, newState) => ({ ...state, ...newState }), {
    name: '',
    email: '',
    password: '',
  });

  const submit = React.useCallback(() => {
    const { name, email, password } = data;
    dispatch(signup({ name, email, password })).catch((error) => {
      Interaction.toast({ type: Interaction.FAILURE, content: error.message });
      setError(error.extra.issues.reduce((acc, item) => ({ ...acc, [item.field]: item.message }), {}));
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
          label="Name"
          name="name"
          autoComplete="current-name"
          margin="dense"
          value={data.name}
          error={!!error.name}
          helperText={error.name}
          onChange={handleInputChange}
        />
        <TextField
          variant="outlined"
          label="Email"
          name="email"
          autoComplete="current-email"
          margin="dense"
          value={data.email}
          error={!!error.email}
          helperText={error.email}
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
        Signup
      </Button>

      <div className={SharedStyles.spacer} />

      <div className={SharedStyles.flexRow}>
        <Button className={SharedStyles.flex} component={Link} to="/password-reset">
          Password Reset
        </Button>

        <div className={SharedStyles.spacer} />

        <Button className={SharedStyles.flex} component={Link} to="/login">
          Login
        </Button>
      </div>
    </div>
  );
}

export default SignupView;
