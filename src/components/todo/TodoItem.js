import React from 'react';
import styled from 'styled-components';
import TodoButtons from './TodoButtons';

const TodoItem = () => {
  return (
    <StyledTodoItem>
      TodoItem
      <TodoButtons />
    </StyledTodoItem>
  );
};

export default TodoItem;

const StyledTodoItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
