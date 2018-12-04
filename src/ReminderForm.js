import React, { Component } from 'react';

class ReminderForm extends Component {

  render(){
    return(
      <div className="ui container">
        <form className="ui form" onSubmit={(event) => this.props.handleSubmit(event)} onChange={this.props.handleFormChange}>
         <h4 className="ui dividing header">Reminder Information</h4>

         <div className="field">
           <div className="two fields">
             <div className="field">
               <label>Person Name</label>
               <input type="text" name="personName" placeholder="Name"/>
             </div>
             <div className="field">
               <label>Relation</label>
               <input type="text" name="relation" placeholder="Relation to you"/>
             </div>

             <div className="field">
               <label>Reminder Date</label>
               <input name="birthday" type="date"></input>
             </div>

           </div>
         </div>

           <div className="field">
            <label>Notes</label>
            <div className="fields">
              <div className="twelve wide field">
                <textarea  name="notes" placeholder="Enter notes here..." ></textarea>
              </div>
              <div className="field">
                <label>Recipient Phone #</label>
                <input type="text" name="phone" placeholder="1234567890" />
              </div>
            </div>
          </div>

          {/* <div className="inline field">
            <div className="ui checkbox">
              <input type="checkbox" name="sendReminder" tabIndex="0"  />
              <label>Send Reminder??</label>
            </div>
          </div> */}

          <button className="ui button" name="save" tabIndex="0">Save</button>
          <div className="ui button" name="cancel" tabIndex="0" onClick={this.props.handleCancelClick}>Cancel</div>
        </form>
      </div>
    )
  }

}

export default ReminderForm
