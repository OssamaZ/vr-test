import {Entity} from 'aframe-react';
import React from 'react';

export default props => {
  const geometry = {
    segmentsTheta: 50,
    primitive: 'ring',
    radiusInner: 0.01,
    radiusOuter: 0.02
  };
  const material = {
    color: '#e41685',
    shader: 'flat',
    opacity: props.opacity || 0.9,
    transparent: true
  };
  return (
    <Entity
        cursor={props}
        geometry={geometry} material={material}
        position="0 0 -1"
        animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150" />
  )
}
