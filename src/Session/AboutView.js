import React from 'react';

import { RELEASE_VERSION } from '../common/config';

function AboutView() {
  return (
    <div>
      Release:
      {RELEASE_VERSION}
    </div>
  );
}
export default AboutView;
