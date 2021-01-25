/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Joi from 'joi';
import Form from './common/forms/form';
import { adminService, authService } from '../services';

class Register extends Form {
  state = {
    data: {
      name: '',
      email: '',
      company_id: '',
      company_name: '',
      password: '',
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
    try {
      const response = await adminService.registerAdmin(this.state.data);
      console.log(response);
      authService.loginWithJwt(response.headers['x-auth-token']);
      window.location = '/';
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
            <p>Create your Company's account</p>
            {this.renderInput(
              'name',
              "What's your name?",
              'text',
              'Enter your name'
            )}
            {this.renderInput(
              'email',
              "What's your email?",
              'text',
              'Enter your email'
            )}
            {this.renderInput(
              'company_id',
              'Give your company id.',
              'text',
              'Give an unique Id for your Company'
            )}
            {this.renderInput(
              'company_name',
              "What's your Company Name?",
              'text',
              "Give your company's name"
            )}
            {this.renderInput(
              'password',
              'Create a Password',
              'password',
              'Enter your password (Min. length 6)'
            )}
            {this.renderButton('Register')}
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
