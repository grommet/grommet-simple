import React from 'react';

import DefaultAnchors from './DefaultAnchors';

import hpeTheme from 'grommet-hpe-theme';

export default () => {
  return (
    <DefaultAnchors theme={hpeTheme()} />
  );
}
