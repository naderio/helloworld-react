/* eslint-disable no-alert */

export const SUCCESS = 'success';
export const FAILURE = 'failure';
export const WARNING = 'warning';
export const INFO = 'info';

export const TEXT_OK = 'OK';
export const TEXT_CANCEL = 'Cancel';
export const TEXT_RETURN = 'Return';

const DIALOG_TYPE = {
  [SUCCESS]: '',
  [FAILURE]: '',
  [WARNING]: '',
  [INFO]: '',
  default: '',
};

export function toast({ type = DIALOG_TYPE.default, content }) {
  // @TODO
  window.alert(content);
  return Promise.resolve();
}

export function status({ type = DIALOG_TYPE.default, content }) {
  // @TODO
  window.alert(content);
  return Promise.resolve();
}

export function alert({ title, content }) {
  // @TODO
  window.alert(content);
  return Promise.resolve();
}

export function confirm({ title, content }) {
  // @TODO
  const result = window.confirm(content);
  return Promise.resolve(result);
}

export function confirmWithNeutral({ title, content }) {
  // @TODO
  const result = window.confirm(content);
  return Promise.resolve(result);
}
