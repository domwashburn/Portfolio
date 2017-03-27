import React, { Component, PropTypes } from 'react';
import '@private-cloud/pc-component-library/dist/pc-components.css';
import './scss/styles.scss';
import { Button } from '@private-cloud/pc-component-library';

// import cx from 'classnames';

// import Icon from './Icon';

function App () {
  return (
    <div>
      <h1 className="title--lg">Welcome to the Private Cloud React Boilerplate</h1>
      <p className="text--lg">This app is set up so you can get coding right away!!!</p>
      <Button primary>Primary</Button>
    </div>
  );
}

export default App;
