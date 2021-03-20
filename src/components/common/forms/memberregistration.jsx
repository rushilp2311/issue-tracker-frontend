import React from 'react';
import Joi from 'joi';
import { connect } from 'react-redux';

import Form from './form';
import { authService, memberService } from '../../../services';
import { memberAdded } from '../../../app/memberSlice';

class MemberRegistrationForm extends Form {
  state = {
    data: {
      name: '',
      email: '',
    },
    errors: {},
  };

  componentDidMount() {
    console.log(this.props);
  }

  schema = {
    name: Joi.string().required().label('Name'),
    email: Joi.string().required().email().label('Email'),
  };

  doSubmit = async () => {
    const currentUser = authService.getCurrentUser();
    try {
      const response = await memberService.registerMember({
        ...this.state.data,
        company_id: currentUser.company_id,
      });
      this.props.dispatch(memberAdded(response.data.member));
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
      <div className="form__container">
        <form onSubmit={this.handleSubmit}>
          <div className="form__body">
            {this.renderInput(
              'name',
              "What's member's name?",
              'text',
              "Enter member's name"
            )}
            {this.renderInput(
              'email',
              "What's member's email?",
              'text',
              "Enter member's email"
            )}

            {this.renderButton('Add Member')}
          </div>
        </form>
      </div>
    );
  }
}
export default connect(null)(MemberRegistrationForm);
