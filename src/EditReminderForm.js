import React, { Component } from 'react';

class ReminderForm extends Component {

  render(){
    return(
      <div className="ui container">
        <form id={this.props.selectedReminder.id} className="ui form" onSubmit={(event) => this.props.handleUpdate(event)} onChange={this.props.handleFormChange}>
         <h4 className="ui dividing header">Reminder Information</h4>

         <div className="field">
           <div className="two fields">
             <div className="field">
               <label>Person Name</label>
               <input type="text" name="personName"  defaultValue={this.props.selectedState.personName}/>
             </div>
             <div className="field">
               <label>Relation</label>
               <input type="text" name="relation"  defaultValue={this.props.selectedState.relation}/>
             </div>

             <div className="field">
               <label>Reminder Date</label>
               <input name="birthday" type="date" defaultValue={this.props.selectedState.birthday} ></input>
             </div>

           </div>
         </div>

           <div className="field">
            <label>Notes</label>
            <div className="fields">
              <div className="twelve wide field">
                <textarea  name="notes" defaultValue={this.props.selectedState.notes}  placeholder="Enter notes here..." ></textarea>
              </div>
              <div className="field">
                <label>Recipient Phone #</label>
                <input type="text" name="phone" defaultValue={this.props.selectedState.phone} placeholder="1234567890" />
              </div>
            </div>
          </div>

          {/* <div className="inline field">
            <div className="ui checkbox">
              <input type="checkbox" name="sendReminder" tabIndex="0"  />
              <label>Send Reminder??</label>
            </div>
          </div> */}

          <button className="ui button" name="save" onClick={this.props.changeRedirect} tabIndex="0">Save</button>
          <div className="ui button" name="cancel" tabIndex="0" onClick={this.props.handleCancelClick}>Cancel</div>
        </form>
      </div>
    )
  }

}

export default ReminderForm
