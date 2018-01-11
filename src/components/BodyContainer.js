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

  handleCheckbox = e => {
    if (e.target.checked) {
      const greasedPigs = this.state.displayHogs.filter(pig => {
        return pig.greased === true;
      });
      this.setState({ displayHogs: greasedPigs });
    } else {
      this.setState({ displayHogs: hogs });
    }
  };

  handleDropDown = e => {
    if (e.target.value === "name") {
      const sortedNames = this.state.displayHogs.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else {
          return 1;
        }
      });
      this.setState({ displayHogs: sortedNames });
    } else {
      const sortedWeights = this.state.displayHogs.sort((a, b) => {
        const weight =
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

        if (a[weight] < b[weight]) {
          return 1;
        } else {
          return -1;
        }
      });
      this.setState({ displayHogs: sortedWeights });
    }
  };

  handleClick = e => {
    e.target.classList.toggle("flipped");
  };

  render() {
    const imgSrc = "/../hog-imgs/";

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
        <div>
          Greased:
          <input
            onClick={this.handleCheckbox}
            type="checkbox"
            value="greased"
          />
          <br />
          <select onChange={this.handleDropDown}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
        <div> --- </div>
        <div className="ui grid container">
          {this.state.displayHogs.map(hog => {
            return (
              <Tile
                hog={hog}
                key={hog.name}
                img={formatImgName(hog.name)}
                handleClick={this.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BodyContainer;
