import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MonthContainer from './MonthContainer';
import DetailsContainer from './DetailsContainer'

class HomeContainer extends Component {

  mapReminders = ()=>{
    if (this.props.user) {
      return this.props.user.reminders.map(reminder=>{return <div>{reminder.birthday}</div>})
    }
  }

  render(){

    return(
      <div>
        <button onClick={this.props.handleLogoutClick}>Logout</button>
        {this.mapReminders()}
      <Sidebar/>
      <MonthContainer/>
      <DetailsContainer/>
      </div>
    )
  }

}

export default HomeContainer
