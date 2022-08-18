import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import axios from 'axios';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await axios.get(
      'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );
    console.log(response);
    setTodos(response.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return (
    <StyledTodo>
      <h1>Todo</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </StyledTodo>
  );
};

export default Todo;

const StyledTodo = styled.div``;
