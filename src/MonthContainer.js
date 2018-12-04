import React, { Component } from 'react';
import Calendar from './Calendar'


class MonthContainer extends Component {

  render(){
    return(
      <div className="twelve wide column">
        <Calendar handleNameClick={this.props.handleNameClick} dates={this.props.dates}/>
      </div>
    )
  }

}

export default MonthContainer
