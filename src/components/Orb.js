import { Entity } from 'aframe-react';
import React from 'react';

export default props =>
  <Entity>
    <a-animation
      attribute="rotation" easing="linear" direction={props.direction || 'normal'}
      dur="10000" to="0 360 0"
      repeat="indefinite"></a-animation>
    <Entity geometry="primitive: sphere; radius: 0.2"
          material="color: #4347b8; shader: flat"
          light="color: #96c5d9; type: directional; intensity: 1;"
          position="15 0.5 -3" />
  </Entity>
