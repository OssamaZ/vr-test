import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import {Entity, Scene} from 'aframe-react';

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
      color: 'red',
      room: '1.png'
    };
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  changeRoom(e) {
    this.setState({
      room: '2.jpg'
    })
  }

  dumb() {
    return (
      <div>

      <Entity light={{type: 'ambient', color: '#888'}}/>
      <Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
      <Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>

      <Entity
        animation__rot={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
        animation__sca={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
        geometry='primitive: box'
        material={{color: this.state.color, opacity: 0.6}}
        position='0 -0.5 -3'
        onClick={this.changeColor.bind(this)}>
        <Entity
          animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
          geometry='primitive: box; depth: 0.2; height: 0.2; width: 0.2'
          material={{color: '#24CAFF'}} />
      </Entity>

      </div>
    )
  }

  render () {
    return (
      <Scene>

        <Camera>
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
    );
  } // Render

}

export default VrScene;
