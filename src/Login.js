import React, { Component } from 'react';

class Login extends Component {

  render(){
    return(
      <div>
        <form className="login" onSubmit={this.props.handleLoginSubmit} >
          <label>Email: </label>
          <input onChange={this.props.handleEmailChange} type="email"></input><br></br>
          <label>Password: </label>
          <input onChange={this.props.handlePasswordChange} type="password"></input><br></br>
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default Login
