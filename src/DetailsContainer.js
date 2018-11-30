import React, { Component } from 'react';
import ViewDetails from './ViewDetails';
import EditDetails from './EditDetails';

class DetailsContainer extends Component {

  render(){
    return(
      <div>
      DetailsContainer
      <ViewDetails/>
      <EditDetails/>
      </div>
    )
  }

}

export default DetailsContainer
