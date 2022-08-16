import React from 'react';
import styled from 'styled-components';
import TodoButtons from './TodoButtons';

const TodoItem = () => {
  return (
    <li>
      TodoItem
      <TodoButtons />
    </li>
  );
};

export default TodoItem;

const StyledTodoItem = styled.div``;
