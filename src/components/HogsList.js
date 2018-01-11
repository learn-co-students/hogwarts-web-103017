import React from 'react'
import hogs from '../porkers_data'
import HogDisplay from './HogDisplay'
import SortHogs from './SortHogs'

export default class HogsList extends React.Component {
  constructor(){
    super();

    this.state = {
      hogs: [],
      isClicked: [],
      activeSearch: 'all'
    }
  }

  componentDidMount(){
    this.setState({
      hogs: hogs,
      isClicked: []
    })
  }

  onLessClick = (name) => {
    this.setState(prevState => {
      return {
        isClicked: [...this.state.isClicked, name]
      }
    }, () => console.log('less click', this.state))
  }

  onMoreClick = (name) => {
    let index = this.state.isClicked.indexOf(name)
    // console.log(index, name)
      let copyState = [...this.state.isClicked]
      copyState.splice(index, 1)
      // console.log('copy state', copyState)
    this.setState(prevState => {
      return {
        isClicked: copyState
      }
    }, () => console.log('more click', this.state))
  }

  onFilterChange = (ev) => {
    let value = ev.target.value
    this.setState(prevState => {
      return {
        activeSearch: value
      }
    })
  }

  renderFilter = () => {
    switch(this.state.activeSearch) {
      case 'all':
        return this.state.hogs
      break;
      case 'name':
        return this.state.hogs.sort((hog1, hog2) => hog1.name < hog2.name ? -1 : 1)
      break;
      case 'weight':
        return this.state.hogs.sort((hog1, hog2) => {return hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']})
      break;
      case 'greased':
        return this.state.hogs.filter(hog => hog.greased)
      break;
    }
  }  

  render(){
    return <div>
              <SortHogs activeSearch={this.state.activeSearch} onFilterChange={this.onFilterChange}/>
              <br />
              <HogDisplay hogs={this.renderFilter()} isClicked={this.state.isClicked} onLessClick= {this.onLessClick} onMoreClick={this.onMoreClick}/>
            </div>
  }
}
