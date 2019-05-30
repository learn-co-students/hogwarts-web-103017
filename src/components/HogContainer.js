import React from "react";
import HogDisplay from "./HogDisplay";

const HogContainer = (props) => {
  const hogCardsToDisplay = props.hogs.map((hog,index) => <HogDisplay key={index} hog={hog} />);
  return(
    <div className="ui grid container">
      {hogCardsToDisplay}
    </div>
  )
}

export default HogContainer;
