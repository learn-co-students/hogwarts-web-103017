import React from 'react'
import HogDetail from './HogDetail'


class HogTile extends React.Component{

  constructor(props){
    super(props)
    this.state={
      hog: props.hog,
      detailsShown: false,
    }
  }
  handleClick = (e) => {
    this.setState({
      detailsShown: !this.state.detailsShown})
  }
  imageName = () => {
    let name = this.props.hog.name.toLowerCase().split(" ")
    if (name.length > 1) {
      return `${name.join("_")}.jpg`
    } else {
      return `${name}.jpg`
    }

  }
  render(){
    return (
      <div onClick={this.handleClick} className="ui four wide column">
        <div className="ui card pigTile">
          <div className="image">
            <img src={`/../hog-imgs/${this.imageName()}`} alt="" />
          </div>
          <div className="content">
            <h3>{this.state.hog.name}</h3>
            {!this.state.detailsShown ? "" : <HogDetail hog={this.state.hog} />}
          </div>
        </div>
      </div>
    )
  }

}




export default HogTile
