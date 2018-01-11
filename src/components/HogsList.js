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
      hogs: hogs,
      isClicked: []
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
    })
  }

  clickHandler = (event) => {
    console.log(event.target)
    console.log(event.target.parentNode)
    event.persist()
    event.target.className === "maxPigTile" ? this.onSecondClick(event) : this.onClick(event)
  }

  render(){
    return <div onClick={this.clickHandler}>
              <HogDisplay hogs={this.state.hogs} isClicked={this.state.isClicked}/>
            </div>
  }
}
