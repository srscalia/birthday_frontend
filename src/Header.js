import React from "react";
import { NavLink } from 'react-router-dom'

const Header =(props)=>{
  return (
    <div className="ui inverted menu">
      <NavLink className="active item" onClick={props.handleHomeClick} to="/">Home</NavLink>
      <NavLink className="item" to="/newreminder" onClick={props.changeRedirect}>Add Reminder</NavLink>
      <NavLink className="item" to="/logout" onClick={props.handleLogoutClick}>Logout</NavLink>
    </div>
  )
}

export default Header
