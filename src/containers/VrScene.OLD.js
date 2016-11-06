import React, { Component } from 'react';
import {registerComponent} from 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import {Animation, Entity, Scene} from 'aframe-react';

// Components
import Camera from '../components/Camera';
import Text from '../components/Text';
import Sky from '../components/Sky';

class VrScene extends Component {
  constructor(props) {
    super(props);
    // bind shit
    this.changeRoom = this.changeRoom.bind(this);
    this.state = {
      room: '1.png'
    };
  }

  changeRoom(e) {
    this.setState({
      room: '2.jpg'
    })
  }

  render () {
    return (
      <Scene className='vr-scene-wrapper'>

        <a-assets>
          <img id="grid" src="images/grid.png" />
          <img id="sky" src="images/sky.jpg" />
        </a-assets>

        <a-entity position="0 0 0"
          geometry="primitive: plane; width: 10000; height: 10000;" rotation="-90 0 0"
          material="src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6; roughness: 0.4; sphericalEnvMap: #sky;"></a-entity>

        <a-entity light="color: #ccccff; intensity: 1; type: ambient;" visible=""></a-entity>
        <a-entity light="color: ffaaff; intensity: 1.5" position="5 5 5"></a-entity>
        <a-entity light="color: white; intensity: 0.5" position="-5 5 15"></a-entity>
        <a-entity light="color: white; type: ambient;"></a-entity>

        <a-sky src="#sky" rotation="0 -90 0"></a-sky>

      </Scene>
    );
  } // Render

}

export default VrScene;


/*

<Scene>

  <Camera
    fov='80'>
    <a-cursor
      animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
    </a-cursor>
  </Camera>

  <Sky src={`url(images/${this.state.room})`}/>

  {this.state.room === '1.png' && <Entity
    position='-.9 -.2 -5'
    geometry='primitive: circle; radius: .2'
    material={{color: '#24CAFF'}}
    onClick={e => this.setState({room:'2.jpg'})} />}

  {this.state.room === '2.jpg' && <Entity
    position='-8 -.2 -4.5'
    rotation='0 10 0'
    geometry='primitive: circle; radius: .5'
    material={{color: '#bfff24'}}
    onClick={e => this.setState({room:'1.png'})} />}

  {this.state.room === '2.jpg' && <Entity
    position='10 -.2 -3.5'
    rotation='0 -40 0'
    geometry='primitive: circle; radius: .5'
    material={{color: '#e024ff'}}
    onClick={e => this.setState({room:'3.jpg'})} />}

  {this.state.room === '3.jpg' && <Entity
    position='10 -.2 -1'
    rotation='0 -70 0'
    geometry='primitive: circle; radius: .6'
    material={{color: '#242cff'}}
    onClick={e => this.setState({room:'4.jpg'})} />}

  {this.state.room === '4.jpg' && <Text
    text='Fuck You Nabil'
    color='#526585'
    rotation='0 45 0'
    position='-8 -1 -1' />}

  {this.state.room === '4.jpg' && <Text
    text='Restart'
    rotation='0 -90 0'
    color='#3478ec'
    position='4.5 1 -1'
    onClick={e => this.setState({room:'1.png'})} />}

</Scene>

*/
