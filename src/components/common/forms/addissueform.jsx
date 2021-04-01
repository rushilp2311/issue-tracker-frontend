/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import Form from './form';

class AddIssueForm extends Form {
  render() {
    return (
      <div className="form__container">
        {/* <form>
          <div className="form__body">
            <div className="project__details">
              <h4 className="title">1. Project Details</h4>
              {this.renderInput(
                'project_name',
                "What's your Project Name?",
                'text',
                "Enter project's name"
              )}

              <p>
                Status: <span>Open</span>
              </p>
            </div>
            {this.renderButton('Report')}
          </div>
        </form> */}
        <p>Issue Form</p>
      </div>
    );
  }
}

export default AddIssueForm;
