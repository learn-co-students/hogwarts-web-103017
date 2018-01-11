import React from 'react';
import HogCard from './HogCard'

const HogList = ({hogs}) =>
{
  return(<div className = "hogList">
    {hogs.map(hog =>
        <HogCard hog = {hog} />
    )}
  </div>
)
}

export default HogList;
