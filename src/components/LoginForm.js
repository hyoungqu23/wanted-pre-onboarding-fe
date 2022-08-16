import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
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
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signin',
        {
          email: email,
          password: password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      localStorage.setItem('token', response.data.access_token);

      console.log('response', response);

      navigate('/todo');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledLoginForm>
      <h1>Login</h1>
      <form>
        <label htmlFor="emailInput">Email</label>
        <input type="text" id="emailInput" onChange={handleEmailChange} />
        <label htmlFor="passwordInput">PW</label>
        <input
          type="password"
          id="passwordInput"
          onChange={handlePasswordChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <Link to="/signup">Join us</Link>
    </StyledLoginForm>
  );
};

export default LoginForm;

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 80%;

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
        border: 2.5px solid #ffc107;
      }
    }

    button {
      font-size: 1.25rem;
      background-color: #ffc107;

      &:hover {
        border: 2.5px solid black;
      }
    }
  }

  a {
    color: red;
    font-weight: bold;
    text-decoration: none;
  }
`;
