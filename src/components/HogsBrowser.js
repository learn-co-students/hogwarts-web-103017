import React from 'react';

const HogsBrowser = ({hogs}) => {
  const allHogs = hogs.map((hog,index) => <HogCard key={index} hog={hog}/>)
  return (
    <div>{allHogs}</div>
  )
}
const HogCard = ({hog}) => {
  return (
    <div>
      <h3>{hog.name}</h3>
      <h4>{hog.specialty}</h4>
      <h4>{hog.greased ? 'GREASED' : 'NOT GREASED'}</h4>
    </div>
  )
}

export default HogsBrowser;
