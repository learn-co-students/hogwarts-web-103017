import React, { Component } from 'react';
import HogDisplay from './HogDisplay.js';
import HogInfo from './HogInfo.js';

class Hog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hogState: true
    }
  }

  handleHogState = () => {
    this.state.hogState ? this.setState({hogState: false}) : this.setState({hogState: true})
  }

  render(){
    return(
      <div className="ui four wide column pigTile" onClick={this.handleHogState}>
        <h1>{this.props.hogData.name}</h1>
        <img src={require(`../hog-imgs/${this.props.hogData.name.toLowerCase().replace(new RegExp(' ', 'g'), "_")}.jpg`)}  />
        {this.state.hogState === true ? <HogDisplay hogInfo={this.props.hogData}/>: <HogInfo hogInfo={this.props.hogData}/> }
      </div>
    )
  }
}

export default Hog;
