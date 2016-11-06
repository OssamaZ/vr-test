import React, { Component } from 'react';
import { registerComponent } from 'aframe';
import { component } from 'aframe-layout';
import { Animation, Entity, Scene } from 'aframe-react';

import Camera from '../components/Camera';
import Cursor from '../components/Cursor';
import Ground from '../components/Ground';
import Light from '../components/Light';
import Orb from '../components/Orb';
import Sky from '../components/Sky';

// registerComponent('layout', component);
export default class VrScene extends Component {
  constructor(props, state) {
    super(props, state);

    this.state = {};
  }

  render() {
    return (
      <Scene className='vr-scene-wrapper'>
        <a-assets>
          <img id="sky" src="images/sky.jpg"/>
          <img id="ground" src="images/ground.jpg"/>
          <img id="tiefighter" src="images/tiefighter.png"/>
        </a-assets>

        <Camera>
          <Cursor fuse={true} maxDistance="100" timeout="500"/>
        </Camera>
        <Sky />
        <Ground color="#2e4063" />

        <Light type="ambient" color="#acacac" />
        <Light type="directional" intensity={1} position="1 1 0" />

        <Orb />
        <Orb direction="reverse"/>

        <Entity>
          <Entity geometry="primitive: plane"
                  material="src: #tiefighter; shader: flat; transparent: true"
                  position="0 10 -10" look-at="[camera]" scale="3 3 3" />
          <a-animation
           attribute="rotation" easing="linear"
           dur="60000" to="0 360 0"
           repeat="indefinite"></a-animation>
        </Entity>
      </Scene>
    );
  } // Render
}


/*

<Light type="directional" intensity={1} position="1 1 0"/>
<Orb />
<Orb direction="reverse"/>

<Entity>
  <Entity geometry="primitive: plane"
          material="src: #tiefighter; shader: flat; transparent: true"
          position="0 10 -10" look-at="[camera]" scale="3 3 3" />
  <Animation attribute="rotation" dur="64000" easing="linear" repeat="indefinite"
             to="0 360 0"/>
</Entity>

*/
