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
    greasedHogs: [],
    greased: false,
    filter: 'All',
    filteredHogs: [],
  }
}

greasedHogs = () => {
  const newHogs = this.state.hogs.filter(hog => hog.greased === true)
  this.setState({
    greasedHogs: newHogs
  })
};

filterHogs() {
  let filteredPigs = this.state.hogs;
  if (this.state.greased) {
    filteredPigs = this.state.greasedHogs;
  }
  return filteredPigs;
}

handleGreasedFilter = () => {
  this.setState({
    greased: !this.state.greased,
  }, () => this.greasedHogs())
}

sortHogs = () => {
  console.log(this.state.hogs)
  switch (this.state.filter) {
    case "Name":
      const sortedByName = [...this.state.hogs];
      sortedByName.sort(function(a,b){
        const firstValue = a.name.split(" ").join('').toUpperCase();
        const secondValue = b.name.split(" ").join('').toUpperCase();

        // console.log(firstValue,secondValue)
        if (firstValue < secondValue) {
           return -1;
         }
         if (firstValue > secondValue) {
           return 1;
         }
        return 0;
      })
      console.log(sortedByName)

      // this.setState({
      //   filteredHogs: sortedByName
      // })
      break;
    case "Weight":

      break;
    default:

  }
}

handleFilter = (e) => {
  this.setState({
    filter: e.target.value
  }, () => this.sortHogs())
}

  render() {
    console.log(this.state.hogs)
    const {hogs, greased} = this.state;
    return (
      <div className="App">
        < Nav />
        < Filter
          greased={greased}
          handleGreasedFilter={this.handleGreasedFilter}
          handleFilter={this.handleFilter}
        />
      <HogsBrowser hogs={this.filterHogs()} />
      </div>
    )
  }
}

export default App;
