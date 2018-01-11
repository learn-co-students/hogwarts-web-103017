import React from 'react';
class HogCard extends React.Component
{

  constructor(props)
  {
    super(props)
    // console.log(this.props)
    this.state = {
      isClicked: false
    }


  }

   setHogState = () =>
  {

    this.setState({isClicked: !this.state.isClicked})
  }

  showHogData = () =>
  {
    // console.log(this.props.hog)
    return(
      <div>
        <p>
          Specialty: {this.props.hog.specialty}
        </p>
        <p>
          Weight : {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
        </p>
        <p>
          Greased : {this.props.hog.greased ? "True": "False"}
        </p>
        <p className="achievementText">
          Highest Medal Achieved : {this.props.hog["highest medal achieved"]}
        </p>
      </div>
      )
  }

  // {
  //   name: 'Mudblood',
  //   specialty: 'Mediocre magic',
  //   greased: false,
  //   'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
  //   'highest medal achieved': 'bronze'
  // },
  render()
  {

    return(
      <div onClick={this.setHogState} className="pigTile hover">
        <h3>{this.props.hog.name}</h3>
        <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase()}.jpg`)}/>
        {this.state.isClicked ? this.showHogData() : ""}
      </div>
    )
  }
}

export default HogCard
