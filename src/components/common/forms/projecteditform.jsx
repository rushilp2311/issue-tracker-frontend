/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Joi from 'joi';
import TextField from '@material-ui/core/TextField';
import Input from './input';
import AutoSuggest from '../autosuggest';
import Form from './form';
import { authService, projectService } from '../../../services';

class ProjectEditForm extends Form {
  state = {
    data: {
      project_name: '',
      due_date: '',
      project_admin: '',
    },
    memberlist: this.props.memberlist,
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

  componentDidMount = () => {
    const { data } = this.props;
    const dataObj = {
      project_name: data.project_name,
      due_date: data.due_date,
      project_admin: '',
    };
    this.setState({ data: dataObj });
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  render() {
    return (
      <div className="edit__form__container">
        <form onSubmit={this.handleSubmit}>
          <div className="edit__form__body">
            <div className="project__info">
              <Input
                name="project_name"
                label="Change Project Name"
                value={this.state.data.project_name}
                onChange={this.handleChange}
                placeholder="Enter your Project Name"
                error={this.state.errors.project_name}
              />
              <div className="form-group">
                <label>Change Due Date</label>
                <TextField
                  id="date"
                  type="date"
                  onChange={this.handleDateChange}
                  value={this.state.data.due_date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>

            <div className="member__access">
              <label>Change Project Admin</label>
              <AutoSuggest
                memberlist={this.state.memberlist}
                value={this.state.data.project_admin}
                handleAdminChange={this.handleAdminChange}
              />
            </div>
            {this.renderButton('Save')}
          </div>
        </form>
      </div>
    );
  }
}
export default ProjectEditForm;
