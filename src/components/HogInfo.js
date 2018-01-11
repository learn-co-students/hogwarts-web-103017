import React, { Component } from 'react';

class HogInfo extends Component {

  //return target.replace(new RegExp(search, 'g'), replacement);

  render(){
    return(
      <div>
      <p>Speciality: <b>{this.props.hogInfo.specialty}</b></p>
      <p>{this.props.hogInfo.greased ? "Is Greased" : "Not Greased"}</p>
      <p>Weight:{this.props.hogInfo['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p>Highest Medal: {this.props.hogInfo['highest medal achieved']}</p>
      </div>

    )
  }
}

export default HogInfo
