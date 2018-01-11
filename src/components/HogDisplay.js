import React from 'react'
import MoreHog from './MoreHog'
import LessHog from './LessHog'

const HogDisplay = (props) => {
  return (<div className='ui grid container'>
            {props.hogs.map(hog => {
              return props.isClicked.includes(hog.name) ? <MoreHog hog={hog} /> : <LessHog hog={hog} />
            })}
          </div>)
}

export default HogDisplay;
