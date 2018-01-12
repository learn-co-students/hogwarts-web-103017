import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hogpen from './Hogpen'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />

          <Hogpen/>
      </div>
    )
  }
}

export default App;
