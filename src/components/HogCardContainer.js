import React from 'react';

class HogCardContainer extends React.Component {
  constructor() {
    super();

  this.state = {
    showView: false,
  }
}

handleClick = () => {
  console.log('incide the handleClick')
  this.setState({
    showView: !this.state.showView
  })
}

  render() {
    return (
      <div>
        {this.state.showView ? <ShowHogCard handleClick={this.handleClick} hog={this.props.hog}/> : <HogCard handleClick={this.handleClick} hog={this.props.hog} />}
      </div>
    )
  }
}

const HogCard = (props) => {
  return (
    <div onClick={props.handleClick}>
      <h3>{props.hog.name}</h3>
    </div>
  )
}

const ShowHogCard = (props) => {
  console.log(props.hog)
  return (
    <div onClick={props.handleClick}>
      <h3>{props.hog.name}</h3>
      <h4>{props.hog.specialty}</h4>
      <h4>{props.hog.greased ? "Greased" : "Ungreased"}</h4>
    </div>
  )
}

export default HogCardContainer;
