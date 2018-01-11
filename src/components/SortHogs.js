import React from 'react';

const SortHogs = (props) => {
  return(
    <div className="ui form">
      <div className="field">
        <select onChange={props.onFilterChange} value={props.activeSearch}>
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
          <option value="greased">Greased</option>
        </select>
      </div>
    </div>
  )
}

export default SortHogs;