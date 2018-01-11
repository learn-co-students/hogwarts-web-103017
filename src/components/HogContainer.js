import React, { Component } from 'react';
import Hog from './Hog.js'
import Filter from './filter.js'
import Sort from './sort.js'


class HogContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      hogs: this.props.hogs,
      filter: 'all',
      sortState: 'all',
    }
  }

  greasedClickHandler = (greaseLevel) => {
    let value = 'all'

    if(greaseLevel === 'true'){
      value = true
    } else if (greaseLevel === 'false') {
      value = false
    }
    this.setState({
      filter: value
    })

  }

  sortClickHandler = (sortParams) => {

    this.setState({
      sortState: sortParams
    })

    console.log(this.state.sortState)
  }

  render(){
    const hogCards = this.state.hogs.map(hog => {
      if(this.state.filter === 'all'){
        return <Hog hogData={hog} />
      } else if (hog.greased === this.state.filter) {
        return <Hog hogData={hog} />
      }
    }).sort((a,b) => {
      if(this.state.sortState !== 'all'){
        return eval(`a.props.hogData["${this.state.sortState}"] > b.props.hogData["${this.state.sortState}"]`)
      }
    })

    return(
      <div className='hog-container ui grid container'>
        <Filter clickHandler={this.greasedClickHandler} />
        <br/>
        <Sort clickHandler={this.sortClickHandler}/>
        <br/>
        {hogCards}
      </div>
    )
  }
}

export default HogContainer;
