import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MonthContainer from './MonthContainer';
import DetailsContainer from './DetailsContainer'

class HomeContainer extends Component {

  state = {
    selectedReminder: null
  }


  sidebarDates = () => {
    if (this.props.user) {
      return this.props.user.reminders.filter(reminder=>{
        if (new Date(reminder.birthday) > new Date()) {
          return (new Date(reminder.birthday)-new Date())*(1.1574e-8) <= 15
        }
      })
    }
  }

  handleNameClick = (reminder)=>{
    this.setState({
      selectedReminder: reminder
    }, () => this.props.passUpSelected(reminder))
  }

  render(){
    return(
      <div className="ui grid">
        <Sidebar sidebarDates={this.sidebarDates()}/>
        {this.state.selectedReminder ?
        <DetailsContainer
          selectedReminder={this.state.selectedReminder}
          selectedState={this.props.selectedState}
          handleFormChange={this.props.handleFormChange}
          handleUpdate={this.props.handleUpdate}
          changeRedirect={this.props.changeRedirect}
          handleDeleteClick={this.props.handleDeleteClick}
      />
         : <MonthContainer handleNameClick={this.handleNameClick}  dates={this.props.user.reminders}/>}
      </div>
    )
  }

}

export default HomeContainer
