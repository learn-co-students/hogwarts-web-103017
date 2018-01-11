import React from 'react'
import hogs from '../porkers_data'
import HogDisplay from './HogDisplay'

export default class HogsList extends React.Component {
  constructor(){
    super();

    this.state = {
      hogs: [],
      isClicked: []
    }
  }

  componentDidMount(){
    this.setState({
      hogs: hogs
    })
  }

  onClick = (event) => {
    let id = event.target.id
    this.setState(prevState => {
      return {
        isClicked: [...this.state.isClicked, id]
      }
    })
  }

  onSecondClick = (event) => {
    let id = event.target.id
    let index = this.state.isClicked.indexOf(id)
    this.setState(prevState => {
      return {
        isClicked: this.state.isClicked.splice(index)
      }
    },() => console.log(this.state))
  }

  render(){
    return <div className= 'ui grid container'>
              <HogDisplay hogs={this.state.hogs} onClick={this.onClick} onSecondClick={this.onSecondClick} isClicked={this.state.isClicked}/>
            </div>
  }
}
