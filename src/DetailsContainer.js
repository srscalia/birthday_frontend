import React, { Component } from 'react';
import ViewDetails from './ViewDetails';
import EditReminderForm from './EditReminderForm';

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
        {this.state.edit ? <EditReminderForm handleCancelClick={this.handleCancelClick}
        selectedReminder={this.props.selectedReminder}
        selectedState={this.props.selectedState}
        handleFormChange={this.props.handleFormChange}
        handleUpdate={this.props.handleUpdate}
        changeRedirect={this.props.changeRedirect}
        />
        :
        <ViewDetails
          selectedReminder={this.props.selectedReminder}
          handleEditClick={this.handleEditClick}
          handleDeleteClick={this.props.handleDeleteClick}
        />}
      </div>
    )
  }

}

export default DetailsContainer
