import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';
import HTMLLogo from '../../assets/images/html5-logo2.png'
import CSSLogo from '../../assets/images/css-logo.png'
import ReactLogo from '../../assets/images/react-logo.png'
import HuskyLogo from '../../assets/images/husky.png'
import JSLogo from '../../assets/images/javascript-logo.png'
import Ball from '../../assets/images/bball.png'

class LogoCube extends React.Component {
  render() {
    return (
      <div>
        <center>
            <div
            style={{
                width: 300,
                height: 300
            }}
            >
            <Cube size={300} index="front">
                <div>
                    <img style={{width: '280px', height: '300px'}} src={HTMLLogo} />
                </div>
                <div>
                    <img style={{width: '280px', height: '300px'}} src={CSSLogo} />
                </div>
                <div>
                    <img style={{width: '280px', height: '300px'}} src={ReactLogo} />
                </div>
                <div>
                    <img style={{width: '280px', height: '300px'}} src={HuskyLogo} />
                </div>
                <div>
                    <img style={{width: '280px', height: '300px'}} src={JSLogo} />
                </div>
                <div>
                    <img style={{width: '280px', height: '300px'}} src={Ball} />
                </div>
            </Cube>
            </div>
        </center>
      </div>
    );
  }
}
export default LogoCube