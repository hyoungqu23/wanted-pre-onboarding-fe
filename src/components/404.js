import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Page404 = () => {
  return (
    <Styled404>
      <h1>404: Page Not Found</h1>
      <Link to="/">
        <FontAwesomeIcon icon={faLink} />
        Go to Homepage
      </Link>
    </Styled404>
  );
};

export default Page404;

const Styled404 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2em;
  }

  a {
    font-size: 1.2em;
    margin: 1em;
    text-decoration: none;
    color: #8af;
    text-align: center;

    svg {
      margin-right: 0.5em;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
