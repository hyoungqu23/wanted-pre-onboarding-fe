import React from 'react';
import styled from 'styled-components';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Todo = () => {
  return (
    <>
      <h1>Todo</h1>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Todo;

const StyledTodo = styled.div``;
