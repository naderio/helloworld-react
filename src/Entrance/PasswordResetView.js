import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Interaction from '../Shared/Interaction';

import { initiatePasswordReset } from '../Auth/state';

import styles from './shared.module.css';

function PasswordResetView() {
  const dispatch = useDispatch();

  const processing = useSelector((state) => state.Activity.processingById[initiatePasswordReset.ID] || false);

  const [data, setData] = React.useReducer((state, newState) => ({ ...state, ...newState }), {
    email: '',
  });

  const dataIsValid = React.useMemo(() => {
    return !!data.email;
  }, [data.email]);

  const submit = React.useCallback(() => {
    if (!dataIsValid) {
      return;
    }

    const { email } = data;

    dispatch(initiatePasswordReset(email)).catch((error) => {
      Interaction.toast({ type: Interaction.FAILURE, content: error.message });
    });
  }, [dataIsValid, data, dispatch]);

  return <div>PasswordResetView...</div>;
}

export default PasswordResetView;
