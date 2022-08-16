import React from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
  return (
    <>
      <h1>Sign UP</h1>
      <form>
        <label>ID</label>
        <input type="text" />
        <label>Name</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <label>Password Confirm</label>
        <input type="password" />
        <input type="button" value="Join Us" />
      </form>
    </>
  );
};

export default SignUpForm;

const StyledSignUpForm = styled.div``;
