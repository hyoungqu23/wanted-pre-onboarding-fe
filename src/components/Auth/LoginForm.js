import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { checkEmail, checkPassword } from '../../utils/functions';

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    setValidation({
      email: checkEmail(email),
      password: checkPassword(password),
    });
  }, [email, password]);

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
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!(validation.email && validation.password)}
        >
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
    color: #8af;
    font-weight: bold;
    text-decoration: none;
  }
`;
