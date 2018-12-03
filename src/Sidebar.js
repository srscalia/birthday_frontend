import React, { Component } from 'react';
import UpcomingDetails from './UpcomingDetails';

class Sidebar extends Component {

  mapThroughUpcoming = ()=> {
    return this.props.sidebarDates.map(date=>{
      return <UpcomingDetails birthday={date.birthday} personName={date.person_name}/>
    })
  }

  render(){
    return(
      <div>
      {this.mapThroughUpcoming()}
      </div>
    )
  }

}

export default Sidebar


// set state with current date new Date(); maybe use getMonth() and getDate() to extract the date and the month
//sort all reminders by birthday, same format as the above
// slice the first section of the sorted dates
