/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Joi from 'joi';
import Form from './common/form';
import { authService } from '../services';

class Login extends Form {
  state = {
    data: {
      email: '',
      password: '',
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label('Email'),
    password: Joi.string().required().min(5).label('Password'),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await authService.login(data.email, data.password);
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
            <p>Login into your account</p>
            {this.renderInput('email', "What's your email?")}
            {this.renderInput('password', 'Create a Password', 'password')}
            {this.renderButton('Login')}
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
