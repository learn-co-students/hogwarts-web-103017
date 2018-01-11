import React from 'react'

const LessHog = (props) => {
  return <div className="ui eight wide column" id={props.hog.name}>
           <p className="hoggyText" id={props.hog.name}>{props.hog.name}</p>
           <img src={props.hog.image} alt="pics on pics" />
          </div>
}


export default LessHog;
