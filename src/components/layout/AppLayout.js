import React from 'react';
import styled from 'styled-components';

const AppLayout = ({ children }) => {
  return <StyledAppLayout>{children}</StyledAppLayout>;
};

export default AppLayout;

const StyledAppLayout = styled.section`
  width: 50%;
  height: 100vh;
  margin: 0 auto;
`;
