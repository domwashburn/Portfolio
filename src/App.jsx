import React, { Component, PropTypes } from 'react';
import Typekit from 'react-typekit';
import './scss/styles.scss';

class App extends Component {

  render() {
    return (
      <div className="hue-rotate">
        <h1 className="title--lg">Hey there! <span class="text--bold">I'm Dominick</span></h1>
        <h2 className="title--md">I’m a <span className="text--bold">UI Architect</span> and <span className="text--bold">Front End Developer.</span></h2>
        <h2 className="title--md">I’m currently working for <span className="text--bold">IBM</span> as a <span className="text--bold">Front End Development Lead</span> on our <span className="text--bold">Private Cloud Analytics design team.</span></h2>
        <p className="copy">I believe that beautiful web design is more than pixel deep, so I craft code and
  architecture as polished as the interfaces I’m creating.</p>
        <div className="background"></div>
        <Typekit kitId="fjf7erl" />
      </div>
    );
  }
}

export default App;
