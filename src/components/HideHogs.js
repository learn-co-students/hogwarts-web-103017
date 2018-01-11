import React from "react";

const HideHogs = props => {
  return (
    <form>
      <h2>
        <label>Hide:</label>
      </h2>
      {props.hogs.map(hog => (
        <label>
          {hog.name}
          <input
            onChange={props.checkboxHandler}
            type="checkbox"
            value={hog.name}
            name={hog.name}
          />
        </label>
      ))}
    </form>
  );
};

export default HideHogs;
