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

const Register = ({ setCurrentScreen }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  return (
    <div className='form-container'>
      <div className='form'>
        <h1>Register</h1>
        <FormInput
          label='Name'
          name='Name'
          type='text'
          values={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Name'
          error={error.name}
          onBlur={(e) => {
            if (!validateName(e.target.value)) {
              setError({ name: 'Name is not valid' });
            } else {
              setError({ name: '' });
            }
          }}
          className='input'
        />
        <FormInput
          label='Email'
          name='Email'
          type='text'
          values={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          error={error.email}
          onBlur={(e) => {
            if (!validateEmail(e.target.value)) {
              setError({ email: 'Email is not valid' });
            } else {
              setError({ email: '' });
            }
          }}
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
          label='Register'
          className='button'
          handleClick={() => onSubmit({ username, email, password, setError })}
        />
        <p>
          Have an account?
          <span
            onClick={() => {
              setCurrentScreen('login');
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
