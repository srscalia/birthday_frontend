import React, { Component } from 'react';

class ViewDetails extends Component {

  render(){
    return(
      <div>
      {this.props.selectedReminder ? this.props.selectedReminder.birthday : null}
      </div>
    )
  }

}

export default ViewDetails
