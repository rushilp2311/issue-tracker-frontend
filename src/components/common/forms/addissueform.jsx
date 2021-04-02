/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Joi from 'joi';
import { connect } from 'react-redux';
import { FiX } from 'react-icons/fi';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Form from './form';
import { authService, projectService } from '../../../services';

class AddIssueForm extends Form {
  state = {
    data: {
      issue_title: '',
      issue_description: '',
      assignee: '',
      due_date: new Date(),
      type: '1',
      priority: '1',
    },
    status: [],
    errors: {},
  };

  handleDateChange = (event) => {
    const data = { ...this.state.data, due_date: event._d };
    this.setState({ data });
  };

  handleClear = () => {
    this.setState({ data: { ...this.state.data, assignee: '' } });
  };

  handleAssignee = (e) => {
    e.preventDefault();
    const currentUser = authService.getCurrentUser();
    console.log(this.props);
    this.setState({
      data: {
        ...this.state.data,
        assignee: currentUser.email,
      },
    });
  };

  schema = {
    issue_title: Joi.string().required().label('Issue Title'),
    issue_description: Joi.string().allow(''),
    assignee: Joi.string().allow(''),
    type: Joi.string(),
    due_date: Joi.date(),
    priority: Joi.string(),
  };

  doSubmit = () => {
    const currentUser = authService.getCurrentUser();
    try {
      // await projectService.addProject({
      //   ...this.state.data,
      //   company_id: currentUser.company_id,
      // });
      console.log(this.state.data);
      // this.props.setShowModal(false);
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
        <div className="form__container issue__add-form">
          <form onSubmit={this.handleSubmit}>
            <div className="form__body">
              {this.renderInput(
                'issue_title',
                'Issue Title*',
                'text',
                'Enter issue title'
              )}

              <div className="form-group">
                <label htmlFor="issue_description">Description</label>
                <textarea
                  name="issue_description"
                  id="issue_description"
                  placeholder="Enter Description"
                  className="form-control"
                  cols="30"
                  onChange={this.handleChange}
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Enter Due Date</label>
                <DatePicker
                  name="due_date"
                  value={this.state.data.due_date}
                  minDate={new Date()}
                  onChange={this.handleDateChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="assignee">Assignee</label>
                {this.state.data.assignee ? (
                  <p className="assignee">
                    {this.state.data.assignee}
                    <span onClick={this.handleClear}>
                      <FiX className="image" />
                    </span>
                  </p>
                ) : (
                  <button
                    className="assignee__btn"
                    onClick={this.handleAssignee}
                  >
                    Assign yourself
                  </button>
                )}
              </div>
              <div className="form-group">
                <p className="status">
                  Status: <span>Open</span>
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="type">Issue Type</label>
                <select
                  name="type"
                  id="type"
                  value={this.state.data.type}
                  onChange={this.handleChange}
                >
                  {this.props.typeList.map((type) => (
                    <option value={type.type_id} key={type.type_id}>
                      {type.type_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="type">Issue Priority</label>
                <select
                  name="priority"
                  id="priority"
                  value={this.state.data.priority}
                  onChange={this.handleChange}
                >
                  {this.props.priorityList.map((priority) => (
                    <option
                      value={priority.priority_id}
                      key={priority.priority_id}
                    >
                      {priority.priority_type}
                    </option>
                  ))}
                </select>
              </div>
              {this.renderButton('Report')}
            </div>
          </form>
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}
const mapStateToProps = (state) => ({
  typeList: state.utils.types,
  priorityList: state.utils.priority,
});

export default connect(mapStateToProps)(AddIssueForm);
