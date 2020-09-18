import React, { useState } from 'react';

import FormInput from '../../components/input';
import Button from '../../components/button';
import isEmpty from 'lodash/isEmpty';
import { validateEmail } from '../../utils/validation';

const onSubmit = ({ email, setError }) => {
  const errorObject = {};

  const isEmailValid = validateEmail(email);

  if (!isEmailValid) {
    errorObject.email = 'Email is not valid';
  }

  if (!isEmpty(errorObject)) {
    setError(errorObject);
  }
};

const ForgetPassword = ({ setCurrentScreen }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});

  return (
    <div className='form-container'>
      <div className='form'>
        <h1>Forgot Password ?</h1>
        <p className='forget-password'>
          Enter below the email that you used to login through to get a password
          reset code
        </p>
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

        <Button
          type='submit'
          label='Get Code'
          className='button'
          handleClick={() => onSubmit({ email, setError })}
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
          Remember Password?
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

export default ForgetPassword;
