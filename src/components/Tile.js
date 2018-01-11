import React from "react";

const Tile = props => {
  const imgSrc = props.img;

  const weight =
    "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

  return (
    <div className="ui eight wide column">
      <div className="flip-container pigTile">
        <div key={props.hog.key} onClick={props.handleClick}>
          <div className="flipper">
            <div className="front">
              <img src={imgSrc} alt={props.hog.name} />
              <h1 className="header">{props.hog.name}</h1>
            </div>

            <div className="back">
              <div className="description">
                Specialty: {props.hog.specialty}
                <br />
                Status: {props.hog.greased ? "greased" : "ungreased"}
                <br />
                Weight: {props.hog[weight]} refrigerators
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
