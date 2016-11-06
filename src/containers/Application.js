import React, { Component } from 'react';

// Containers
import VrScene from './VrScene'
import TwoDUiContainer from './TwoDUiContainer'

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="application-container">
        <VrScene />
      </div>
    );
  } // Render

}

export default Application;
