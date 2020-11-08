// @ts-nocheck

import 'core-js/stable';
import 'regenerator-runtime/runtime';

/**
 * Intl
 */
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/fr';

/**
 * globalThis
 */
if (typeof globalThis === 'undefined') {
  const globalThis = (() => {
    // eslint-disable-next-line no-restricted-globals
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    if (typeof this !== 'undefined') return this;
    throw new Error('Unable to locate global `this`');
  })();

  globalThis.globalThis = globalThis;
}
