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
      const greasedPigs = this.state.displayHogs.filter(pig => {return pig.greased === true})
      this.setState({displayHogs: greasedPigs})
    } else {
      this.setState({displayHogs: hogs})
    }
  }

  handleDropDown = e => {
    console.log(e.target.value)
    if (e.target.value === "name") {
      const sortedNames = this.state.displayHogs.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else {
          return 1
        }
      });
      this.setState({displayHogs: sortedNames})
    } else {
      const sortedNames = this.state.displayHogs.sort((a, b) => {
        if (a.weight < b.weight) {
          return -1
        } else {
          return 1
        }
      });
    }
  }

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
        Greased: <input onClick={this.handleCheckbox} type="checkbox" value="greased" />
        <select onChange={this.handleDropDown}>
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
