import React, { Component } from 'react';
import Month from './Month'


class MonthContainer extends Component {

  render(){
    return(
      <div>
      <Month handleNameClick={this.props.handleNameClick} dates={this.props.dates}/>
      </div>
    )
  }

}

export default MonthContainer
