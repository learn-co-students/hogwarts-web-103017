import React, {Component} from 'react';


class Filter extends Component{

  filterClickHandler = (event) => {
    this.props.clickHandler(event.target.value)
  }

  render(){
    return(
        <form className="ui twelve wide column">
          <p>Filter:</p>
          <label>Greased</label>
          <input type="radio" name="greaseLevel" onClick={this.filterClickHandler} value="true"/>
          <label>UnGreased</label>
          <input type="radio" name="greaseLevel" onClick={this.filterClickHandler} value="false"/>
          <label>All</label>
          <input type="radio" name="greaseLevel" onClick={this.filterClickHandler} value="all" option="selected"/>
        </form>
    )
  }
}

export default Filter;
