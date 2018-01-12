import React from 'react'
import Hogs from '../porkers_data'
import HogTile from './HogTile'


  class Hogpen extends React.Component{

    constructor(){
      super()
      this.state={
        hogs: Hogs
      }
    }

    handleChange=(e)=>{
      if (e.target.value === "default") {

      } else if (e.target.value === "name") {
        let nameSort = this.state.hogs.sort((a, b) => {
          let nameA = a.name.toLowerCase()
          let nameB = b.name.toLowerCase()
          if (nameA < nameB) {
            return -1
          }
          if (nameA > nameB) {
            return 1
          }
          return 0
        })
        this.setState({
          hogs: nameSort
        })
      } else if (e.target.value === "weight") {
        const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        let weightSort = this.state.hogs.sort((a, b) => {
          let weightA = parseFloat(a[`${weight}`])
          let weightB = parseFloat(b[`${weight}`])
          return weightA - weightB
        })
        this.setState({
          hogs: weightSort
        })
      }
    }
    handleFilter = (e) => {
      console.log(e.target.value)
    }

    render(){
      return (
        <div>
          <div className="filter">
          <h4>Filter by:</h4>
            <select onChange= {this.handleChange}>
              <option value="default">Sort Hogs</option>
              <option value="name">Name</option>
              <option value="weight">Weight</option>
            </select>
            <form onChange={this.handleFilter}>
              <label>Greased:<input type="radio" value="greased"/></label>
              <label>Ungreased:<input type="radio" value="ungreased"/></label>
              <label>All:<input type="radio" value="all"/></label>
            </form>
          </div>
          <div className="ui grid container">
            {this.state.hogs.map((hog) => (
              <HogTile hog={hog} key={hog.name} />
            ))}
          </div>
        </div>
      )
    }

  }

  export default Hogpen
