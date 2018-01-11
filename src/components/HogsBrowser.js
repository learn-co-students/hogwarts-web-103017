import React from 'react';

const HogsBrowser = ({hogs}) => {
  const allHogs = hogs.map((hog,index) => <HogCardContainer key={index} hog={hog}/>)
  return (
    <div className="ui grid container">{allHogs}</div>
  )
}


class HogCardContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      showView: false,
    }
  }

  render() {
    return (
      <div className="ui eight wide column">
        {this.state.showView ? < ShowHogCard hog={this.props.hog}/> : < HogCard hog={this.props.hog}/>}
      </div>
    )
  }
}

const HogCard = ({hog}) => {
  return (
    <div>{hog.name}</div>
  )
}

const ShowHogCard = ({hog}) => {
  return (
    <div></div>
  )
}


export default HogsBrowser;

// <h4>{hog.specialty}</h4>
// <h4>{hog.greased ? 'GREASED' : 'NOT GREASED'}</h4>
