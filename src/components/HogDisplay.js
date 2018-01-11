import React from 'react'
import MoreHog from './MoreHog'
import LessHog from './LessHog'

const HogDisplay = (props) => {
  return (<div className='ui grid container'>
            {props.hogs.map(hog => {
              return props.isClicked.includes(hog.name) ? <MoreHog hog={hog} onMoreClick={props.onMoreClick}/> : <LessHog hog={hog} onLessClick={props.onLessClick}/>
            })}
          </div>)
}

export default HogDisplay;
