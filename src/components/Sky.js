import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={{primitive: 'sphere', radius: 5000, phiStart: -65}}
          material={{color: props.color || '#73CFF0', shader: 'flat', src: props.src}}
          scale="1 1 -1" {...props}/>
);
