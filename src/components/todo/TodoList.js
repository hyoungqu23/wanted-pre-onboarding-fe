import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = ({ currentTodos, getTodos }) => {
  return (
    <Styledtodolist>
      {currentTodos && currentTodos.length === 0 && <h3>No Tasks.</h3>}
      {currentTodos &&
        currentTodos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} getTodos={getTodos} />;
        })}
    </Styledtodolist>
  );
};

export default TodoList;

const Styledtodolist = styled.ul`
  width: 100%;

  h3 {
    text-align: center;
    margin: 1em 0;
  }
`;
