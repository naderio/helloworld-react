import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Interaction from '../Shared/Interaction';

import { fetchProfile } from '../Auth/state';

function ProfileView() {
  const dispatch = useDispatch();

  const processing = useSelector((state) => state.Activity.processing);
  const userAccount = useSelector((state) => state.Auth.userAccount);
  const userProfile = useSelector((state) => state.Auth.userProfile);

  React.useEffect(() => {
    dispatch(fetchProfile()).catch((error) => Interaction.toast({ type: Interaction.FAILURE, content: error.message }));
  }, [dispatch]);

  return <div>ProfileView...</div>;
}

export default ProfileView;
