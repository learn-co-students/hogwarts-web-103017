import React from "react";
import HogCard from "./HogCard";
import HogCardFull from "./HogCardFull";

class HogDisplay extends React.Component{

  constructor(){
    super();

    this.state = {
      toggle: false,
    }
  }

  handleClick = () =>{
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render(){
    // console.log(this.props.hogs)
    return(
      <div>
        {this.state.toggle ? <HogCardFull handleClick={this.handleClick} hog={this.props.hog} /> : <HogCard handleClick={this.handleClick} hog={this.props.hog} />}
      </div>
    )
  }
}

export default HogDisplay;
