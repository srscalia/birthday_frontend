import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class Welcome extends Component {

  render(){
    return(
      <div className="ui container">
        <h2 style={{color: '#aa72ff'}}>Welcome to Birthday Reminder!</h2>
        <p style={{color: '#aa72ff'}}>Please Login or Signup Below:</p>
        <Login
          handleEmailChange={this.props.handleEmailChange}
          handlePasswordChange={this.props.handlePasswordChange}
          handleLoginSubmit={this.props.handleLoginSubmit}
        />
        <Signup/>
      </div>

    )
  }

}

export default Welcome
