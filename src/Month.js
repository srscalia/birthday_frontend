import React, { Component } from 'react';
import Calendar from "./Calendar";

class Month extends Component {

  render(){
    return(
      <div>
      <Calendar handleNameClick={this.props.handleNameClick} dates={this.props.dates}/>
      </div>
    )
  }

}

export default Month
