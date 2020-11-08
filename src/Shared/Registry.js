import React from 'react';

function createRegister(defaultValue = null) {
  return {
    current: defaultValue,
    set(value) {
      this.current = value;
    },
  };
}

export const toolbarContainerRef = React.createRef();

export const bodyContainerRef = React.createRef();
