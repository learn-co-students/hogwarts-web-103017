import React from 'react';
import HogList from './HogList'
import hogData from '../porkers_data'



class HogContainer extends React.Component
{

  constructor()
  {
    super()
    this.state = {
      hogs: [],
      isFiltering: false,
      filteredHogs: []

    }
  }
  componentDidMount()
  {
    this.addHogsToState()
  }


  addHogsToState = () =>
  {
    this.setState({hogs: hogData})
  }

  filterHogsByWeight = () =>
  {
    let key = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    let hogsClone = [...this.state.hogs]
    let sorted = hogsClone.sort(function(a, b) {
        let x = b[key]; let y = a[key];
        return ((x < y) ? - 1 : ((x > y) ? 1 : 0));
    });
    this.setState({filteredHogs: sorted, isFiltering:true})
    console.log(this.state.filteredHogs)
  }

  filterHogsByName = () =>
  {
    let hogsClone = [...this.state.hogs]
    let sorted = hogsClone.sort(function(a, b) {
        let y = b.name; let x = a.name;
        return ((x[0] < y[0]) ? - 1 : ((x[0] > y[0]) ? 1 : 0));
    });
    this.setState({filteredHogs: sorted, isFiltering:true})
    console.log(this.state.filteredHogs)
  }

  clearFilter = () => this.setState({isFiltering:false})


  filterByGreased = () =>
  {

    let greasedHogs = this.state.hogs.filter(hog => hog.greased)
    this.setState({filteredHogs: greasedHogs, isFiltering:true})
  }

  isFiltering=()=>
  {
    this.setState({isFiltering: !this.state.isFiltering})
  }


  render()
  {
    // this.addHogsToState()
    return(
      <div>
        <h1>show me ur hog</h1>
          <div className='filterWrapper'>
            <button onClick={this.filterHogsByWeight}>Filter by Weight</button>
            <button onClick={this.filterHogsByName}>Filter by Name</button>
            <button onClick={this.filterByGreased}>Greased?</button>
            <button onClick={this.clearFilter}>Clear Filters</button>
          </div>
        {this.state.isFiltering ? <HogList hogs={this.state.filteredHogs} /> : <HogList hogs={this.state.hogs} />}
      </div>
    )
  }
}
export default HogContainer
