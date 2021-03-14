/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import Joi from 'joi';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Input from './input';
import AutoSuggest from '../autosuggest';
import { authService, projectService } from '../../../services';

class ProjectEditForm extends Component {
  state = {
    data: {
      project_name: '',
      due_date: '',
      project_admin: '',
      status_name: '',
    },
    errors: {},
  };

  schema = {
    project_name: Joi.string().required().label('Name'),
    due_date: Joi.date(),
    project_admin: Joi.number(),
    status_name: Joi.string(),
  };

  handleDateChange = (event) => {
    const data = { ...this.state.data, due_date: event._d };
    this.setState({ data });
  };

  handleAdminChange = (value) => {
    const data = { ...this.state.data, project_admin: value };
    this.setState({ data });
  };

  doSubmit = async () => {
    const { setShowModal } = this.props;
    const { data, errors } = this.state;
    const currentUser = authService.getCurrentUser();
    try {
      await projectService.addProject({
        ...data,
        company_id: currentUser.company_id,
      });
      setShowModal(false);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const e = { ...errors };
        e.email = ex.response.data;
        this.setState({ errors: e });
      }
    }
  };

  componentDidMount = () => {
    const { data } = this.props;
    this.setState({ data });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { data } = this.state;
    const { error } = Joi.validate(data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (const item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
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
    const { data, errors } = this.state;
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="edit__form__container">
          <form onSubmit={this.handleSubmit}>
            <div className="edit__form__body">
              <div className="project__info">
                <Input
                  name="project_name"
                  label="Change Project Name"
                  value={data.project_name}
                  onChange={this.handleChange}
                  placeholder="Enter your Project Name"
                  error={errors.project_name}
                />
                <Input
                  name="status_name"
                  label="Change Status"
                  value={data.status_name}
                  onChange={this.handleChange}
                  placeholder="Enter your Project Name"
                  error={errors.status_name}
                />
                <div className="form-group">
                  <label>Change Due Date</label>
                  <DatePicker
                    value={data.due_date}
                    onChange={this.handleDateChange}
                    name="due_date"
                  />
                </div>
              </div>

              <div className="member__access">
                <label>Change Project Admin</label>
                <AutoSuggest
                  value={this.props.data.name}
                  handleAdminChange={this.handleAdminChange}
                />
              </div>
              <div className="form-group">
                <button className="form__btn">Save</button>
              </div>
            </div>
          </form>
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}
export default ProjectEditForm;
