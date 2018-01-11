import React from 'react'

const MoreHog = (props) => {
  return <div className="maxPigTile" id={props.hog.name} onClick={props.onSecondClick}>
            <p className="hoggyText" id={props.hog.name} onClick={props.onSecondClick}>{props.hog.name}: {props.hog.greased}</p>
          </div>
}

export default MoreHog;
