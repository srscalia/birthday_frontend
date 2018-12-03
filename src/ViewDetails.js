import React, { Component } from 'react';

class ViewDetails extends Component {

  render(){
    return(
      <div className="ui card container">
        <div className="image">
          <img src="https://png.pngtree.com/svg/20170220/balloon_437926.png"/>
        </div>
        <div className="content">
          <a className="header">{this.props.selectedReminder.person_name}</a>
          <div className="meta">
            <span className="date">Birthday: {this.props.selectedReminder.birthday}</span>
          </div>
          <div className="description">
            Relation: {this.props.selectedReminder.relation}
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="gift icon"></i>
            {this.props.selectedReminder.notes}
          </a>
        </div>
        <div class="ui vertical animated button" tabindex="0">
          <div class="hidden content">Edit</div>
          <div class="visible content">
          <i class="wrench icon"></i>
        </div>
</div>

      </div>
    )
  }

}

export default ViewDetails

// {this.props.selectedReminder ? this.props.selectedReminder.birthday : null}
