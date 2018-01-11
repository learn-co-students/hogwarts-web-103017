import React, { Component } from "react";
import hogs from "../porkers_data";
import Tile from "./Tile";

class BodyContainer extends Component {
  constructor() {
    super();

    this.state = {
      displayHogs: hogs
    };
  }

  render() {
    const imgSrc = "../hog-imgs/";

    const formatImgName = name => {
      return (
        imgSrc +
        name
          .toLowerCase()
          .split(" ")
          .join("_") +
        ".jpg"
      );
    };

    return (
      <div>
        Greased: <input type="checkbox" value="greased" />
        <select>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        {this.state.displayHogs.map(hog => {
          return (
            <Tile hog={hog} key={hog.name} img={formatImgName(hog.name)} />
          ); //with some props
        })}
      </div>
    );
  }
}

export default BodyContainer;
