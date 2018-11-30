import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MonthContainer from './MonthContainer';
import DetailsContainer from './DetailsContainer'

class HomeContainer extends Component {

  render(){
    return(
      <div>
      HomeContainer
      <Sidebar/>
      <MonthContainer/>
      <DetailsContainer/>
      </div>
    )
  }

}

export default HomeContainer
