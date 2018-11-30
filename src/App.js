import React, { Component } from "react";
import Welcome from './Welcome';
import HomeContainer from './HomeContainer'

const USERS = 'http://localhost:3000/api/v1/users'


class App extends Component {

  state = {
    loggedInUser: 1,
    users: []
  }

  componentDidMount(){
    fetch(USERS)
    .then(r=>r.json())
    .then(json=>{
      this.setState({
        users: json
      })
    })
  }


  findUser = ()=> {
    return this.state.users.find(user=>{
      return user.id ===this.state.loggedInUser
    })
  }


  render() {
    console.log(this.findUser());
    return (
      <div>
        {this.state.loggedInUser ? <HomeContainer user={this.findUser()}/> : <Welcome/>}
      </div>
    );
  }
}
export default App;
