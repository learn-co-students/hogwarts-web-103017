import React from 'react';

const HogsBrowser = ({hogs}) => {
  const allHogs = hogs.map(hog => <HogCard hog={hog}/>)
  return (
    <div>{allHogs}</div>
  )
}
const HogCard = ({hog}) => {
  return (
    <div>
      <h3>{hog.name}</h3>
      <h4>{hog.specialty}</h4>
    </div>
  )
}

export default HogsBrowser;
