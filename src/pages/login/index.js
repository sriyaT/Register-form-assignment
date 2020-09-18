import React, { useState } from 'react';
import FormInput from '../../components/input';
import Button from '../../components/button';
import isEmpty from 'lodash/isEmpty';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../utils/validation';

const onSubmit = ({ username, email, password, setError }) => {
  const errorObject = {};
  const isNameValid = validateName(username);
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  if (!isNameValid) {
    errorObject.name = 'Name is not valid';
  }
  if (!isEmailValid) {
    errorObject.email = 'Email is not valid';
  }
  if (!isPasswordValid) {
    errorObject.password = 'Password is not valid or strong';
  }
  if (!isEmpty(errorObject)) {
    setError(errorObject);
  }
};

const Login = ({ setCurrentScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  return (
    <div className='form-container'>
      <div className='form'>
        <h1>Welcome Back!</h1>

        <FormInput
          label='Email'
          name='Email'
          type='text'
          values={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error.email}
          onBlur={(e) => {
            if (!validateEmail(e.target.value)) {
              setError({ email: 'Email is not valid' });
            } else {
              setError({ email: '' });
            }
          }}
          placeholder='Email'
          className='input'
        />
        <FormInput
          label='Password'
          name='Password'
          type='text'
          values={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          error={error.password}
          onBlur={(e) => {
            if (!validatePassword(e.target.value)) {
              setError({ password: 'Password is not valid or strong' });
            } else {
              setError({ password: '' });
            }
          }}
          className='input'
        />
        <Button
          type='submit'
          label='Login'
          className='button'
          handleClick={() => onSubmit({ email, password, setError })}
        />
        <p>
          Do not have an account?{' '}
          <span
            onClick={() => {
              setCurrentScreen('signup');
            }}
          >
            Register
          </span>
        </p>
        <p>
          Forget password?
          <span
            onClick={() => {
              setCurrentScreen('forgetpassword');
            }}
          >
            Reset Password
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
