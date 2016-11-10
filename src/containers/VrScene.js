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
        </a-assets>

        <Camera>
          <Cursor fuse={false} />
        </Camera>

        <Sky color="#adf2d1" />

        <Ground color="#abbcde" />

      </Scene>
    );
  } // Render
}
