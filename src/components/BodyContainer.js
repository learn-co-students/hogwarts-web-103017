import React, { Component } from 'react';
import hogs from '../porkers_data';


class BodyContainer extends Component {
  constructor() {
    super();

    this.state = {
      displayHogs: hogs
    };
  }

  render() {
    return (
      <div>
        Greased: <input type="checkbox" value="greased" />
        <select >
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    )
  }

}


export default BodyContainer;
