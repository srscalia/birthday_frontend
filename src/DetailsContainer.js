import React, { Component } from 'react';
import ViewDetails from './ViewDetails';
import EditDetails from './EditDetails';

class DetailsContainer extends Component {

  render(){
    return(
      <div>
      Reminder Details
      <ViewDetails selectedReminder={this.props.selectedReminder}/>
      <EditDetails/>
      </div>
    )
  }

}

export default DetailsContainer
