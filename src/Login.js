import React, { Component } from 'react';

class Login extends Component {

  render(){
    return(
      <div>
        <form className="ui form" onSubmit={this.props.handleLoginSubmit} >
          <div className="field">
            <label>Email: </label>
            <input onChange={this.props.handleEmailChange} type="email"></input><br></br>
          </div>
          <div className="field">
            <label>Password: </label>
            <input onChange={this.props.handlePasswordChange} type="password"></input><br></br>
          </div>
          <button className="ui button" type="submit" value="submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default Login
