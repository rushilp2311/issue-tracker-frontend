import React from 'react';
import Joi from 'joi';
import Form from './form';
import { authService, memberService } from '../../../services';

class MemberRegistrationForm extends Form {
  state = {
    data: {
      name: '',
      email: '',
    },
    errors: {},
  };

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
export default MemberRegistrationForm;
