import React from "react";

const HogCardFull = (props) => {
  return(
    <div className="ui eight wide column">
      <div className="ui card">
        <div className="image" onClick={props.handleClick}>
          <img src={require("../hog-imgs/" + props.hog.name.toLowerCase().split(" ").join("_") + ".jpg")} alt=""/>
        </div>
        <div className="content">
          <a className="header">Name: {props.hog.name}</a>
          <p className="header">Specialty: {props.hog.specialty}</p>
          <p className="header">Weight: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p className="header">Highest Medal: {props.hog['highest medal achieved']}</p>
          <p className="header">Greased: {props.hog.greased? 'Y': 'N'}</p>
        </div>
      </div>
    </div>
  )
}

export default HogCardFull;
