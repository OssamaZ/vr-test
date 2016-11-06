import React, { Component } from 'react';

class TwoDUiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="twod-ui-container">
        <ul className='main-2d-nav'>
          <li>
            <a href="#">Main Page</a>
          </li>
          <li>
            <a href="#">360° videos</a>
          </li>
          <li>
            <a href="#">360° images</a>
          </li>
          <li>
            <a href="#">case ontact us</a>
          </li>
        </ul>
      </div>
    );
  } // Render

  renderOLD () {
    return (
      <div className="application-container" ref='applicationContainer'>
        <h3>Test WebVR <a href='#' onClick={e => {
          e.preventDefault();
          this.refs.applicationContainer.classList.toggle('open-images');
        }}>images</a></h3>
        <section className='vr-scene-wrapper'>
          <div className="images">
            {['1.png', '2.jpg', '3.jpg', '4.jpg'].map(img => (
              <img src={`images/${img}`} key={img} />
            ))}
          </div>
          <VrScene />
        </section>
      </div>
    );
  } // Render

}

export default TwoDUiContainer;
