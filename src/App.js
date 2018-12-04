import React, { Component } from "react";
import Welcome from './Welcome';
import HomeContainer from './HomeContainer'
import Header from './Header'
import Logout from './Logout'
import ReminderForm from './ReminderForm'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

const USERS = 'http://localhost:3000/api/v1/users'
const REMINDERS = 'http://localhost:3000/api/v1/reminders'
// const USERTOKEN = 'http://localhost:3000/api/v1/user_token'
// const CURRENTUSER = 'http://localhost:3000/api/v1/users/current'


class App extends Component {

  state = {
    loggedInUser: null,
    users: [],
    emailInput: "",
    passwordInput: "",
    personName: "",
    relation: "",
    birthday: "",
    notes: "",
    phone: "",
    redirect: false
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

  authenticateUser = () => {
    let foundUser = this.state.users.find(user =>
      user.email === this.state.emailInput)
    this.setState({loggedInUser: foundUser})


  //   console.log(this.state)
  //   fetch(USERTOKEN, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body : JSON.stringify({
  //       "auth": {"email": this.state.emailInput, "password": this.state.passwordInput}
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(json => localStorage.setItem("jwt", json.jwt))
  //   .then(this.fetchCurrentUser())
  // }
  //
  // fetchCurrentUser = () => {
  //   fetch(CURRENTUSER, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${localStorage.jwt}`,
  //     }
  //   })
  //   .then(console.log)
    ///// // TODO:  NEED TO FIX THIS SO THAT IT FETCHES THE CURRENT USER AND WE CAN PUT IT IN STATE AS AN OBJECT
  }


  handleEmailChange = (event) => {
    this.setState({emailInput : event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({passwordInput : event.target.value})
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.authenticateUser()
  }

  handleLogoutClick = (event) => {
    // localStorage.clear()
    this.setState({loggedInUser: null})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let data = {
     "user_id": this.state.loggedInUser.id,
     "relation": this.state.relation,
     "birthday": this.state.birthday,
     "person_name": this.state.personName,
     "send_reminder": true,
     "phone": this.state.phone,
     "notes": this.state.notes
    }

    fetch(REMINDERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => this.addReminder(data))
    .then(event.target.reset())
    .then(this.setState({redirect: true}))
  }

  addReminder = (data) => {
    this.setState(prevState => {
      return {loggedInUser: {
        ...prevState.loggedInUser, reminders:[...prevState.loggedInUser.reminders, data]
      }}
    })
  }

  handleFormChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name] : value
    })
  }


  redirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  changeRedirect = () => {
    this.setState({redirect: false})
  }

  render() {

    return (
      <BrowserRouter>
        <div>
          <Header handleLogoutClick={this.handleLogoutClick} changeRedirect={this.changeRedirect}/>

          {this.redirect()}

          {this.state.loggedInUser ? <Route exact path="/" render={ () => <HomeContainer user={this.state.loggedInUser}/>}/> : <Route exact path="/" render={()=> <Welcome
            handleEmailChange={this.handleEmailChange}
            handlePasswordChange={this.handlePasswordChange}
            handleLoginSubmit={this.handleLoginSubmit}/>}/>}
        </div>

        <div>
          {this.state.loggedInUser ? <Route path="/newreminder" render={() => <ReminderForm handleSubmit={this.handleSubmit} handleFormChange={this.handleFormChange} />}/> : null}
        </div>

        <div>
          <Route path="/logout" render={() => <Logout />} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
