/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Joi from 'joi';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import AutoSuggest from '../autosuggest';
import Form from './form';
import { authService, projectService } from '../../../services';

class AddProjectForm extends Form {
  state = {
    data: {
      project_name: '',
      due_date: new Date(),
      project_admin: '',
    },
    memberlist: this.props.memberlist,
    errors: {},
  };

  handleDateChange = (event) => {
    const data = { ...this.state.data, due_date: event._d };
    this.setState({ data });
  };

  handleAdminChange = (value) => {
    const data = { ...this.state.data, project_admin: value };
    this.setState({ data });
  };

  schema = {
    project_name: Joi.string().required().label('Name'),
    due_date: Joi.date(),
    project_admin: Joi.number(),
  };

  doSubmit = async () => {
    console.log(this.state);
    const currentUser = authService.getCurrentUser();
    try {
      const response = await projectService.addProject({
        ...this.state.data,
        company_id: currentUser.company_id,
      });
      console.log(response);
      this.props.setShowModal(false);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="form__container">
          <form onSubmit={this.handleSubmit}>
            <div className="form__body">
              <div className="project__details">
                <h4 className="title">1. Project Details</h4>
                {this.renderInput(
                  'project_name',
                  "What's your Project Name?",
                  'text',
                  "Enter project's name"
                )}
                <label>Enter Due Date</label>
                {/* <TextField
                  className="form-group"
                  id="date"
                  type="date"
                  onChange={this.handleDateChange}
                  value={this.state.data.due_date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> */}
                <DatePicker
                  name="due_date"
                  value={this.state.data.due_date}
                  minDate={new Date()}
                  onChange={this.handleDateChange}
                />
                <p>
                  Status: <span>Open</span>
                </p>
              </div>

              <div className="member__access">
                <h4 className="title">2. Member Access</h4>
                <label>Add Project Admin</label>
                <AutoSuggest
                  memberlist={this.state.memberlist}
                  value={this.state.data.project_admin}
                  handleAdminChange={this.handleAdminChange}
                />
              </div>
              {this.renderButton('Add Project')}
            </div>
          </form>
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}
export default AddProjectForm;
