import React from 'react'

const LessHog = (props) => {
  return <div className="minPigTile" onClick={props.onClick} id={props.hog.name}>
            <p className="hoggyText" id={props.hog.name}>{props.hog.name}</p>
            <img src={props.hog.image} alt="pics on pics" id={props.hog.name}/>
          </div>
}


export default LessHog;
