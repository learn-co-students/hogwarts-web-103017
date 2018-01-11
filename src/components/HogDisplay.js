import React from 'react'
import MoreHog from './MoreHog'
import LessHog from './LessHog'

const HogDisplay = (props) => {
  return (<div className='ui eight wide column'>
            {props.hogs.map(hog => {
              return props.isClicked.includes(hog.name) ? <MoreHog hog={hog} onSecondClick={props.onSecondClick} /> : <LessHog hog={hog} onClick={props.onClick} />
            })}
          </div>)
}

export default HogDisplay;
