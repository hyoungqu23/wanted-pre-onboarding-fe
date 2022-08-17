import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  checkEmail,
  checkPassword,
  checkPasswordConfirm,
} from '../../utils/functions';

const SignUpForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [validation, setValidation] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  useEffect(() => {
    setValidation({
      email: checkEmail(email),
      password: checkPassword(password),
      passwordConfirm: checkPasswordConfirm(password, passwordConfirm),
    });
  }, [email, password, passwordConfirm]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validation.email && validation.password) {
      try {
        await axios.post(
          'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signup',
          {
            email,
            password,
          },
        );
        navigate('/');
      } catch (error) {
        console.log(error, error.message);
      }
    }
  };

  return (
    <StyledSignUpForm>
      <h1>Sign UP</h1>
      <form>
        <label>Email</label>
        <input
          type="text"
          onChange={handleEmailChange}
          isvalid={validation.email ? 'true' : 'false'}
          placeholder="Enter your Email"
          autoComplete="off"
        />
        <label>Password</label>
        <input
          type="password"
          onChange={handlePasswordChange}
          isvalid={validation.password ? 'true' : 'false'}
          placeholder="Enter your password"
        />
        <label>Password Confirm</label>
        <input
          type="password"
          onChange={handlePasswordConfirmChange}
          isvalid={validation.passwordConfirm ? 'true' : 'false'}
          placeholder="Enter your password again"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={
            !(
              validation.email &&
              validation.password &&
              validation.passwordConfirm
            )
          }
        >
          Join Us
        </button>
      </form>
    </StyledSignUpForm>
  );
};

export default SignUpForm;

const StyledSignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 80%;

    label {
      font-size: 0.75em;
    }

    input,
    button {
      margin-bottom: 0.5em;
      padding: 0.5em;
      border-radius: 8px;
      height: 2em;

      &::placeholder {
        color: #aaa;
        font-size: 0.75em;
      }
    }

    input {
      background-color: #e3e3e3;
    }

    button {
      font-size: 1em;
      background-color: #ffc107;
      font-weight: bold;

      &:disabled {
        background-color: #e3e3e3;
      }
    }
  }

  a {
    color: red;
    font-weight: bold;
    text-decoration: none;
  }
`;
