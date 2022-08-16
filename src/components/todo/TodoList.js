import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div>
      <h2>Todo</h2>
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodoList;

const Styledtodolist = styled.div``;
