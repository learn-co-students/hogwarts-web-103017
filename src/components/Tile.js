import React from "react";

const Tile = props => {
  const imgSrc = props.img

  const weight =
    "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

  return (
    <div className="ui card" key={props.hog.key}>
      <div className="image">
        <img src={imgSrc} />
      </div>

      <div className="name">
        <h1 className="header">{props.hog.name}</h1>

        <div className="description">{props.hog.specialty}</div>

        <div className="description">
          {props.hog.greased ? "greased" : "ungreased"}
        </div>

        <div className="description">{props.hog[weight]}</div>
      </div>
    </div>
  );
};

export default Tile;
