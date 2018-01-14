import React from "react";

const HogCard = (props) => {
  return(
    <div className="ui eight wide column">
      <div className="ui card">
        <div className="image" onClick={props.handleClick}>
          <img src={require("../hog-imgs/" + props.hog.name.toLowerCase().split(" ").join("_") + ".jpg")} alt=""/>
        </div>
        <div className="content">
          <a className="header">Name: {props.hog.name}</a>
        </div>
      </div>
    </div>
  )
}

export default HogCard;
