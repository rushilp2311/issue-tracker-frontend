/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Joi from 'joi';
import TextField from '@material-ui/core/TextField';
import AutoSuggest from '../autosuggest';
import Form from './form';
import { authService, memberService } from '../../../services';

class AddProjectForm extends Form {
  state = {
    data: {
      name: '',
      due_date: '',
      project_admin: '',
    },
    memberlist: [],
    errors: {},
  };

  handleDateChange = (event) => {
    const data = { ...this.state.data, due_date: event.target.value };
    this.setState({ data });
  };

  handleAdminChange = (value) => {
    const data = { ...this.state.data, project_admin: value };
    this.setState({ data });
  };

  async componentDidUpdate() {
    await memberService
      .getAllMembers(authService.getCurrentUser().company_id)
      .then((result) => {
        this.setState({ memberlist: result.data });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  schema = {
    name: Joi.string().required().label('Name'),
    due_date: Joi.date(),
    project_admin: Joi.string(),
  };

  doSubmit = async () => {
    // const currentUser = authService.getCurrentUser();
    // try {
    //   const response = await memberService.registerMember({
    //     ...this.state.data,
    //     company_id: currentUser.company_id,
    //   });
    //   console.log(response);
    //   this.props.setShowModal(false);
    // } catch (ex) {
    //   if (ex.response && ex.response.status === 400) {
    //     const errors = { ...this.state.errors };
    //     errors.email = ex.response.data;
    //     this.setState({ errors });
    //   }
    // }
  };

  render() {
    return (
      <div className="form__container">
        <form onSubmit={this.handleSubmit}>
          <div className="form__body">
            <div className="project__details">
              <h4 className="title">1. Project Details</h4>
              {this.renderInput(
                'name',
                "What's your Project Name?",
                'text',
                "Enter project's name"
              )}
              <label>Enter Due Date</label>
              <TextField
                className="form-group"
                id="date"
                type="date"
                onChange={this.handleDateChange}
                value={this.state.data.due_date}
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
    );
  }
}
export default AddProjectForm;
