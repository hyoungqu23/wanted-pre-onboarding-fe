import React from 'react';
import styled from 'styled-components';
import TodoButtons from './TodoButtons';

const TodoItem = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <StyledTodoItem key={todo.id}>
            <p>{todo.todo}</p>
            <TodoButtons />
          </StyledTodoItem>
        );
      })}
    </>
  );
};

export default TodoItem;

const StyledTodoItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  margin: 1em 0;
`;
