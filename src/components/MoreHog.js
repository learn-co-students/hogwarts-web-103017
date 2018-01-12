import React from 'react'

const MoreHog = (props) => {
  return <div className="ui eight wide column" id={props.hog.name} onClick={() => props.onMoreClick(props.hog.name)}>
            <p className="hoggyText" >{props.hog.name}: {props.hog.greased}</p>
          </div>
}

export default MoreHog;
