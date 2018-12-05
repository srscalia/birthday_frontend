import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class Welcome extends Component {

  render(){
    return(
      <div className="ui container">
        <img src="https://tbncdn.freelogodesign.org/bc114fdc-5cd8-43c7-a35f-c0d7ce4057ba.png?1544040628545" alt=""/>
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
