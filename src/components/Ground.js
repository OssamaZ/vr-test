import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={{primitive: 'cylinder', height: 0.2, radius: 70}}
          material={{color: props.color || '#121417', metalness: .6, roughness: .7,
                     repeat: '10 10', src: '#ground'}}
          position="0 -10 0"/>
);
