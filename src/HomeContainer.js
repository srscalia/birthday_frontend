import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MonthContainer from './MonthContainer';
import DetailsContainer from './DetailsContainer'

class HomeContainer extends Component {



  sidebarDates = ()=>{
    if (this.props.user) {
      return this.props.user.reminders.filter(reminder=>{
        if (new Date(reminder.birthday) > new Date()) {
          return (new Date(reminder.birthday)-new Date())*(1.1574e-8) <=10
        }
      })
    }
  }

  render(){

    return(
      <div>
        <button onClick={this.props.handleLogoutClick}>Logout</button>
      <Sidebar sidebarDates={this.sidebarDates()}/>
      <MonthContainer/>
      <DetailsContainer/>
      </div>
    )
  }

}

export default HomeContainer
