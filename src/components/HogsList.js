import React from "react";
import hogs from "../porkers_data";
import HogDisplay from "./HogDisplay";
import SortHogs from "./SortHogs";
import HideHogs from "./HideHogs";
export default class HogsList extends React.Component {
  constructor() {
    super();

    this.state = {
      hogs: [],
      isClicked: [],
      filteredPigs: [],
      activeSearch: "all"
    };
  }

  componentDidMount() {
    this.setState({
      hogs: hogs,
      isClicked: [],
      filteredPigs: hogs
    });
  }

  onLessClick = name => {
    this.setState(
      prevState => {
        return {
          isClicked: [...this.state.isClicked, name]
        };
      },
      () => console.log("less click", this.state)
    );
  };

  onMoreClick = name => {
    let index = this.state.isClicked.indexOf(name);
    // console.log(index, name)
    let copyState = [...this.state.isClicked];
    copyState.splice(index, 1);
    // console.log('copy state', copyState)
    this.setState(
      prevState => {
        return {
          isClicked: copyState
        };
      },
      () => console.log("more click", this.state)
    );
  };

  onFilterChange = ev => {
    let value = ev.target.value;
    this.setState(prevState => {
      return {
        activeSearch: value
      };
    });
  };

  renderFilter = () => {
    switch (this.state.activeSearch) {
      case "all":
        return this.state.filteredPigs;
        break;
      case "name":
        return this.state.filteredPigs.sort(
          (hog1, hog2) => (hog1.name < hog2.name ? -1 : 1)
        );
        break;
      case "weight":
        return this.state.filteredPigs.sort((hog1, hog2) => {
          return (
            hog1[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ] -
            hog2[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ]
          );
        });
        break;
      case "greased":
        return this.state.filteredPigs.filter(hog => hog.greased);
        break;
    }
  };

  checkboxHandler = ev => {
    let hog = this.state.filteredPigs.find(hog => hog.name === ev.target.value);
    let index = this.state.filteredPigs.indexOf(hog);
    let copyState = [...this.state.filteredPigs];
    if (ev.target.checked) {
      copyState.splice(index, 1);
      this.setState(prevState => {
        return { filteredPigs: copyState };
      });
    } else {
      hog = this.state.hogs.find(hog => hog.name === ev.target.value);
      copyState.push(hog);
      console.log(copyState);
      this.setState(prevState => {
        return { filteredPigs: copyState };
      });
    }
  };

  render() {
    return (
      <div>
        <SortHogs
          activeSearch={this.state.activeSearch}
          onFilterChange={this.onFilterChange}
        />
        <br />
        <HogDisplay
          hogs={this.renderFilter()}
          isClicked={this.state.isClicked}
          onLessClick={this.onLessClick}
          onMoreClick={this.onMoreClick}
        />
        <br />
        <HideHogs
          checkboxHandler={this.checkboxHandler}
          hogs={this.state.hogs}
        />
      </div>
    );
  }
}
