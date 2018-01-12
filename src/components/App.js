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
    greased: false,
    filter: 'All',
    filteredHogs: hogs
  }
}
//
handleGreasedFilter = () => {
  console.log('hey')
  this.setState({
    greased: !this.state.greased,
  }, () => this.sortHogs())
}
//
// greasedHogs = () => {
//   if (this.state.greased) {
//     this.setState({
//       filteredHogs: this.state.filteredHogs.filter(hog => hog.greased === true)
//     }, () => console.log(this.state.filteredHogs))
//   } else {
//     console.log(this.state.filteredHogs)
//   }
// }


sortHogsByWeight = () => {
  const sortedByWeight = [...this.state.hogs];
  sortedByWeight.sort(function(a,b){
    const firstValue = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
    const secondValue = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
    return secondValue - firstValue;
  })
  return sortedByWeight
}


sortHogsByName = () => {
  const sortedByName = [...this.state.hogs];
  sortedByName.sort(function(a,b){
    const firstValue = a.name.split(" ").join('').toUpperCase();
    const secondValue = b.name.split(" ").join('').toUpperCase();
    if (firstValue < secondValue) {
       return -1;
     }
     if (firstValue > secondValue) {
       return 1;
     }
    return 0;
  })
  return sortedByName
}

sortHogs = () => {
  let sortedHogs = this.state.hogs
  if (this.state.filter === 'All') {
    if (this.state.greased) {
      sortedHogs = sortedHogs.filter(hog => hog.greased === true)
    }
  } else if (this.state.filter === 'Name') {
    if (this.state.greased) {
      sortedHogs = this.sortHogsByName().filter(hog => hog.greased === true)
    } else {
      sortedHogs = this.sortHogsByName()
    }
  } else if (this.state.filter === 'Weight') {
    if (this.state.greased) {
      sortedHogs = this.sortHogsByWeight().filter(hog => hog.greased === true)
    } else {
      sortedHogs = this.sortHogsByWeight()
    }
  }

  this.setState({
    filteredHogs: sortedHogs
  })
}



handleFilter = (e) => {
  this.setState({
    filter: e.target.value
  }, () => this.sortHogs())
}

  render() {
    // console.log(this.state.hogs)
    const {hogs, greased} = this.state;
    return (
      <div className="App">
        < Nav />
        < Filter
          greased={greased}
          handleGreasedFilter={this.handleGreasedFilter}
          handleFilter={this.handleFilter}
        />
      <HogsBrowser hogs={this.state.filteredHogs} />
      </div>
    )
  }
}

export default App;
