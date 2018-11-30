import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class Welcome extends Component {

  render(){
    return(
      <div>
      Welcome
      <Login/>
      <Signup/>
      </div>

    )
  }

}

export default Welcome
