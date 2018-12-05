import React, { Component } from 'react';

class ViewDetails extends Component {

  showMessageForm = () => {
    if (this.props.showMessage === true) {
      return (
        <div className="ui container">
          <h4 class="ui horizontal divider header">
            <i class="mail icon"></i>
            Message
          </h4>
          <form className="ui form" onSubmit={(event) => this.props.handleMessageSubmit(event, this.props.selectedReminder)}>
            <div className="field">
              <label>Enter Birthday Message Here</label>
              <input type="text" onChange={this.props.handleMessageChange} name="birthdayMessage"  placeholder="Type your message"/>
            </div>
            <button className="ui button" name="send" tabIndex="0">Send</button>
          </form>
        </div>
      )
    } else {
      return null
    }
  }

  render(){
    return(
      <div className="ui card container">
        <div className="image">
          <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="balloons"/>
        </div>
        <div className="content" style={{background: '#aa72ff'}}>
          <div className="header">{this.props.selectedReminder.person_name}</div>
          <div className="meta">
            <span className="date">Birthday: {this.props.selectedReminder.birthday}</span>
          </div>
          <div className="description">
            Relation: {this.props.selectedReminder.relation}
          </div>
        </div>
        <div className="extra content">
          <a href="search">
            <i className="gift icon"></i>
            {this.props.selectedReminder.notes}
          </a>
        </div>

        <div className="ui vertical animated button"  onClick={this.props.handleMessageClick} tabIndex="0">
          <div className="hidden content">Send Message</div>
          <div className="visible content">
          <i className="envelope icon"></i>
          </div>
        </div>

        <div className="ui vertical animated button"  onClick={this.props.handleEditClick} tabIndex="0">
          <div className="hidden content">Edit</div>
          <div className="visible content">
          <i className="wrench icon"></i>
          </div>
        </div>

        <div className="ui vertical animated button" onClick={() => this.props.handleDeleteClick(this.props.selectedReminder)} tabIndex="0">
          <div className="hidden content">Delete</div>
          <div className="visible content">
          <i className="trash icon"></i>
          </div>
        </div>

        <div className="ui vertical animated button"  onClick={this.props.handleGoBackClick} tabIndex="0">
          <div className="hidden content">Go Back</div>
          <div className="visible content">
          <i className="arrow left icon"></i>
          </div>
        </div>

        <div>{this.showMessageForm()}</div>


      </div>
    )
  }

}

export default ViewDetails

// {this.props.selectedReminder ? this.props.selectedReminder.birthday : null}
