import React, { Component } from 'react';
import UpcomingDetails from './UpcomingDetails';

class Sidebar extends Component {

  mapThroughUpcoming = ()=> {
    return this.props.sidebarDates.map(date=>{
      return <UpcomingDetails key={date.id} birthday={date.birthday} personName={date.person_name}/>
    })
  }

  render(){
    return(
      <div className="ui vertical menu two wide column">
        <i className="huge bullhorn icon" style={{color: '#aa72ff'}}></i>
        <h4 style={{color: '#aa72ff'}}>Upcoming Birthdays</h4>
        {this.mapThroughUpcoming()}
      </div>
    )
  }

}

export default Sidebar
