import React from "react";

const Header =(props)=>{
  return (
    <div className="ui inverted menu">
      <a className="active item" href="use Router">
        Home
      </a>
      <a className="item" href="use Router">
        Add Reminder
      </a>
      <a className="item" onClick={props.handleLogoutClick} href="use Router">
        Logout
      </a>
    </div>
  )
}

export default Header
