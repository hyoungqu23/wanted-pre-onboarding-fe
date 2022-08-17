import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <Styledtodolist>
      <TodoItem todos={todos} />
    </Styledtodolist>
  );
};

export default TodoList;

const Styledtodolist = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
