import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import BodyContainer from './BodyContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < BodyContainer />
      </div>
    )
  }
}

export default App;
