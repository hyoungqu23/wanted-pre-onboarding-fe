import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';

const TodoButtons = () => {
  return (
    <StyledTodoButtons>
      <button>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </StyledTodoButtons>
  );
};

export default TodoButtons;

const StyledTodoButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: space-between;
  gap: 1em;

  button {
    color: blue;
  }
`;
