/* eslint-env jest */
/* eslint-disable import/first */

process.env.DEBUG_COLORS = '0';
process.env.DEBUG_HIDE_DATE = '1';

require('./src/common/init');

import '@testing-library/jest-dom/extend-expect';

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    key(index) {
      return Object.keys(store)[index];
    },
    clear() {
      store = {};
    },
    get length() {
      return Object.keys(store).length;
    },
  };
})();

globalThis.localStorage = localStorageMock;
