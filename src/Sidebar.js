import React, { Component } from 'react';
import UpcomingDetails from './UpcomingDetails';

class Sidebar extends Component {

  render(){
    return(
      <div>
      Sidebar
      <UpcomingDetails/>
      </div>
    )
  }

}

export default Sidebar


// set state with current date new Date(); maybe use getMonth() and getDate() to extract the date and the month
//sort all reminders by birthday, same format as the above
// slice the first section of the sorted dates
