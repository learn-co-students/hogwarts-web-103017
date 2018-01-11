import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsBrowser from './HogsBrowser';
import Filter from './Filter'


class App extends Component {
  constructor() {
    super();

  this.state = {
    hogs: hogs,
    greased: false
  }
}

filterHogs(filter) {
  const newHogs = this.state.hogs.filter(hog => hog.greased === true)
  this.setState({
    hogs: newHogs
  })
}

handleGreasedFilter = () => {
  this.setState({
    greased: !this.state.greased,
  }, () => console.log(this.state.greased))
}

  render() {
    const {hogs, greased} = this.state;
    return (
      <div className="App">
        < Nav />
        < Filter
          greased={greased}
          handleGreasedFilter={this.handleGreasedFilter}
        />
      <HogsBrowser hogs={hogs} />
      </div>
    )
  }
}

export default App;
