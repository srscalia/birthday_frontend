import React, { Component } from "react";

const Header =(props)=>{
  return (
    <div className="ui inverted menu">
      <a className="active item">
        Home
      </a>
      <a className="item">
        Add Reminder
      </a>
      <a className="item" onClick={props.handleLogoutClick}>
        Logout
      </a>
    </div>
  )
}

export default Header
