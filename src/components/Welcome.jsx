import React from 'react';
import portrait_1x from '../assets/images/dom-portrait.png';
import portrait_1_5x from '../assets/images/dom-portrait@1.5x.png';
import portrait_2x from '../assets/images/dom-portrait@2x.png';

function makeSrcSet(imageArray=[]) {
  return imageArray.reduce((currentValue, srcObject, index) => {
    let {imagePath, resolution} = srcObject;

    if ( index > 0 ) {
      return currentValue = `${currentValue}, ${imagePath} ${resolution}`;
    }

    return currentValue = `${imagePath}`;

  }, '');
}


let headerImageSrcSet = [
  { imagePath: portrait_1x, resolution: '1x' },
  { imagePath: portrait_1_5x, resolution: '1.5x' },
  { imagePath: portrait_2x, resolution: '2x' },
];

const Welcome = () => {
  return (
    <div className="row">
      <header className="welcome hue-rotate row-content">
        <div className="welcome__copy hue-text">
          <h1 className="title">Hey there, <span className="text--bold">I'm Dominick!</span></h1>
          <h2 className="sub-title">I’m a <span className="text--bold">UI Architect</span> and <span className="text--bold">Front End Developer.</span></h2>
          <h2 className="sub-title">I’m currently working for <span className="text--bold">IBM</span> as a <span className="text--bold">Front End Development Lead</span> on our <span className="text--bold">Private Cloud Analytics design team.</span></h2>
          <p className="copy">I believe that beautiful web design is more than pixel deep, so I craft code and
    architecture as polished as the interfaces I’m creating.</p>
          <div className="welcome__background"></div>
          <img className="welcome__image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" srcSet={makeSrcSet(headerImageSrcSet)} />
        </div>
      </header>
    </div>
  );
};

export default Welcome;
