import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label>ID</label>
        <input type="text" />
        <label>PW</label>
        <input type="password" />
        <input type="button" value="Login" />
      </form>
      <Link to="/signup">Join us</Link>
    </>
  );
};

export default LoginForm;

const StyledLoginForm = styled.div``;
