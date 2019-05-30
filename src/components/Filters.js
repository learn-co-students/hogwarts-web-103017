import React from "react";

const Filters = (props) => {
  return(
    <div className="navWrapper">
      <label>Greased: </label>
      <input
          name="isGreased"
          type="checkbox"
          onChange={props.handleGreased}
      /><br></br>
      <select onChange={props.handleSelect}>
        <option value="all">All</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>

    </div>
  )
}

export default Filters;
