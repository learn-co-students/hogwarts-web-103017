import React from 'react';
import HogCardContainer from './HogCardContainer'

const HogsBrowser = ({hogs}) => {
  const allHogs = hogs.map((hog,index) =>
    <HogCardContainer key={index} hog={hog}/>
  )

  return (
    <div>{allHogs}</div>
  )
}

const HogCard = ({hog}) => {
  return (
    <div>
      <h3>{hog.name}</h3>
      <h4>{hog.specialty}</h4>
      <h4>GREASED</h4>
    </div>
  )
}

export default HogsBrowser;

//
// import React from 'react';
//
// const HogsBrowser = ({hogs}) => {
//   const allHogs = hogs.map((hog,index) => <HogCardContainer key={index} hog={hog}/>)
//   return (
//     <div className="ui grid container">{allHogs}</div>
//   )
// }
//
//
// class HogCardContainer extends React.Component {
//   constructor() {
//     super()
//
//     this.state = {
//       showView: false,
//     }
//   }
//
//   render() {
//     return (
//       <div className="ui eight wide column">
//         {this.state.showView ? < ShowHogCard hog={this.props.hog}/> : < HogCard hog={this.props.hog}/>}
//       </div>
//     )
//   }
// }
//
// const HogCard = ({hog}) => {
//   return (
//     <div>{hog.name}</div>
//   )
// }
//
// const ShowHogCard = ({hog}) => {
//   return (
//     <div></div>
//   )
// }
//
//
// export default HogsBrowser;
//
// // <h4>{hog.specialty}</h4>
// // <h4>{hog.greased ? 'GREASED' : 'NOT GREASED'}</h4>

// import React from 'react';
// import HogCardContainer from './HogCardContainer'
//
// const HogsBrowser = ({hogs}) => {
//   const allHogs = hogs.map((hog,index) => <HogCard key={index} hog={hog}/>)
//   return (
//     <div>{allHogs}</div>
//   )
// }
// const HogCard = ({hog}) => {
//   return (
//     <div>
//       <h3>{hog.name}</h3>
//       <h4>{hog.specialty}</h4>
//       <h4>GREASED</h4>
//     </div>
//   )
// }
//
// export default HogsBrowser;
