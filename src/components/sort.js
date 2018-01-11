import React, {Component} from 'react';

class Sort extends Component {

  handleNameClick = event => {
    this.props.clickHandler(event.target.value)
  }


  render(){
    return(
      <form className="ui twelve wide column">
        <p>Sort:</p>
        <input type="radio" name="sort" onClick={this.handleNameClick} value="all" id="none"/>
        <label for="all">None</label>
        <input type="radio" name="sort" onClick={this.handleNameClick} value="name" id="name"/>
        <label for="name">Name</label>
        <input type="radio" name="sort" onClick={this.handleNameClick} value='weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water' id="weight"/>
        <label for="weight">Weight</label>

      </form>
    )
  }
}

export default Sort
