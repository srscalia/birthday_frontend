import React, { Component } from 'react';
import ViewDetails from './ViewDetails';
import ReminderForm from './ReminderForm';

class DetailsContainer extends Component {
  state = {
    edit: false
  }

  handleEditClick = () => {
    this.setState({ edit: true })
  }

  handleCancelClick = (event) => {
    event.target.parentElement.reset()
    this.setState({edit:false})
  }

  render(){
    return(
      <div>
        {this.state.edit ? <ReminderForm handleCancelClick={this.handleCancelClick}/> :
          <ViewDetails
            selectedReminder={this.props.selectedReminder}
            handleEditClick={this.handleEditClick}
          />}
      </div>
    )
  }

}

export default DetailsContainer
