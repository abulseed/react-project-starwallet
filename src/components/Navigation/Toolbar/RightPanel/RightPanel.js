import React from 'react';

import Image from 'react-bootstrap/lib/Image';

import SearchImage from '../../../../assets/images/Search.png';
import Persona from '../../../../assets/images/personas/p1.png';
import ArrowImage from '../../../../assets/images/Arrow.png';

const noPadding = {
  padding: '0',
  margin: '0'
}

const RightPanel = () => (
  <div className="RightPanel">
    <div className="text-right" style={noPadding}>
      <Image src={SearchImage} />
    </div>
    <div className="text-center" style={noPadding}>
      <Image src={Persona} style={{ width: '50px', height: '50px' }} rounded />
    </div>
    <div className="text-left" style={noPadding}>
      <Image src={ArrowImage} />
    </div>
  </div>
);

export default RightPanel;