import React from 'react';
import Joi from 'joi';
import Form from './form';

class MemberRegistrationForm extends Form {
  state = {
    data: {
      name: '',
      email: '',
      company_id: '',
      company_name: '',
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label('Name'),
    email: Joi.string().required().email().label('Email'),
    company_id: Joi.string().required(),
    company_name: Joi.string().required(),
    password: Joi.string().required().min(5).label('Password'),
  };

  doSubmit = async () => {
    // try {
    //   const response = await userService.register(this.state.data);
    //   authService.loginWithJwt(response.headers['x-auth-token']);
    //   window.location = '/';
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
