import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsList from './HogsList'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogsList />
      </div>
    )
  }
}

export default App;
