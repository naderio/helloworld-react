import React from 'react';
import ReactDOM from 'react-dom';

import './common/init';

import './styles/index.css';

import AppRoot from './AppRoot';

import { setupStore } from './store';

setupStore();

ReactDOM.render(<AppRoot />, document.getElementById('app'));
