import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Filters from "./Filters";
import HogContainer from "./HogContainer";
import Hogs from "../porkers_data";

class App extends Component {
  constructor(){
    super();

    this.state = {
      filteredHogs: Hogs,
      isGreased: false,
      filter: 'all',
    }
  }

  handleGreased = () => {
    this.setState({
      isGreased: !this.state.isGreased
    }, this.filterHogs)
  }

  handleSelect = (e) => {
    this.setState({
      filter: e.target.value
    }, this.filterHogs)
  }

  filterHogs = () => {
    const greased = this.state.isGreased;
    let myHogs = Hogs;
    switch (this.state.filter) {
      case "weight":
        if (greased) {
          myHogs = myHogs.filter(hog => hog.greased).sort((a,b) => {
            return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']})
        }else {
          myHogs = myHogs.sort((a,b) => {
            return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']})
        }
        break;
      case "name":
        if (greased) {
          myHogs = myHogs.filter(hog => hog.greased).sort(function(a, b) {
            const nameA = a.name.toUpperCase().split(" ").join(''); // ignore upper and lowercase
            const nameB = b.name.toUpperCase().split(" ").join(''); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          })
        }else {
          myHogs = myHogs.sort(function(a, b) {
            const nameA = a.name.toUpperCase().split(" ").join(''); // ignore upper and lowercase
            const nameB = b.name.toUpperCase().split(" ").join(''); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          })
        }
        break;
      default:
        if (greased) {
          myHogs = myHogs.filter(hog => hog.greased)
        }
    }

    this.setState({
      filteredHogs: myHogs
    })
  }

  render() {
    // console.log(Hogs)
    return (
      <div className="App">
        <Nav />
        <Filters handleGreased={this.handleGreased} handleSelect={this.handleSelect}/>
        <HogContainer hogs={this.state.filteredHogs}/>
      </div>
    );
  }
}

export default App;
