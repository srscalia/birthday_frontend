import React, { Component } from 'react';

class ViewDetails extends Component {

  render(){
    return(
      <div className="ui card container">
        <div className="image">
          <img src="https://png.pngtree.com/svg/20170220/balloon_437926.png" alt="balloons"/>
        </div>
        <div className="content">
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
        <div className="ui vertical animated button" onClick={this.props.handleEditClick} tabIndex="0">
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

      </div>
    )
  }

}

export default ViewDetails

// {this.props.selectedReminder ? this.props.selectedReminder.birthday : null}
