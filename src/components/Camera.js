import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity position="0 1 0">
    <Entity camera="fov:80" look-controls {...props}/>
  </Entity>
);
