import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { setupStore } from './store';

import AppRoot from './AppRoot';

describe('App', () => {
  beforeEach(setupStore);
  afterEach(cleanup);

  test('renders correctly', () => {
    const { baseElement } = render(<AppRoot />);

    expect(baseElement).toMatchSnapshot();
  });
});
