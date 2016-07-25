import React from 'react';
import ReactDOM from 'react-dom';

import DefaultAnchors from './DefaultAnchors';
import HPEAnchors from './HPEAnchors';

const Main = () => {
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '50%'}}>
        <DefaultAnchors />
      </div>
      <div style={{width: '50%'}}>
        <HPEAnchors />
      </div>
    </div>
  );
};

const element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);
