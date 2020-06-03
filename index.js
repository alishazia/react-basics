import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './app.js'
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() {
    return (
      <div>
      <App/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));