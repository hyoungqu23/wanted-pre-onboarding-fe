import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signup',
        {
          email,
          password,
        },
      );

      // localStorage.setItem('token', response.data.access_token);

      console.log('response', response);

      navigate('/');
    } catch (error) {
      console.log(error, error.message);
    }
  };

  return (
    <StyledSignUpForm>
      <h1>Sign UP</h1>
      <form>
        <label>Email</label>
        <input type="text" onChange={handleEmailChange} />
        <label>Password</label>
        <input type="password" onChange={handlePasswordChange} />
        <label>Password Confirm</label>
        <input type="password" />
        <button type="submit" onClick={handleSubmit}>
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
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      border-radius: 8px;
      height: 2rem;
      border: none;
      background-color: #f5f5f5;

      &:focus {
        background-color: #ffc107;
      }

      &:hover {
        border: 1px solid #ffc107;
      }
    }

    button {
      font-size: 1rem;
      background-color: #ffc107;

      &:hover {
        border: 1px solid black;
      }
    }
  }

  a {
    color: red;
    font-weight: bold;
    text-decoration: none;
  }
`;
