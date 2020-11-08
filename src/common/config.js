import { Logger } from './logger';

export { RELEASE_VERSION } from './release';

const CONFIG_OVERRIDE = {};

if (localStorage && localStorage.CONFIG_OVERRIDE) {
  try {
    Object.assign(CONFIG_OVERRIDE, JSON.parse(localStorage.CONFIG_OVERRIDE));
  } catch (e) {
    Logger.debug(e);
  }
}

Logger.debug('CONFIG_OVERRIDE', CONFIG_OVERRIDE);

export const API_ENDPOINT =
  CONFIG_OVERRIDE.API_ENDPOINT ||
  (process.env.NODE_ENV === 'production' ? 'http://backend.helloworld.nader.tech' : 'http://localhost:5000');
