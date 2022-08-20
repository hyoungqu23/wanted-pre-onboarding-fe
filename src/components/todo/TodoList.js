import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
  // Set Todo State
  const [currentTodos, setCurrentTodos] = useState([]);

  // Get Todo Lists
  const getTodos = async () => {
    const response = await axios.get(
      'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );

    setCurrentTodos(response.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Styledtodolist>
      {currentTodos && currentTodos.length === 0 && 'No tasks'}
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
`;
