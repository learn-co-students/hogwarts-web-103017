import React from 'react';

const Filter = (props) => {
  return (
    <div>
      <label>Greased</label>
      <input type="checkbox" value={props.greased} onChange={props.handleGreasedFilter}/>
    </div>
  )
}

export default Filter;
