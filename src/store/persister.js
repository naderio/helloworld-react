import persistAdapter from 'redux-localstorage/lib/adapters/localStorage';

export default () => {
  return persistAdapter(window.localStorage);
};
