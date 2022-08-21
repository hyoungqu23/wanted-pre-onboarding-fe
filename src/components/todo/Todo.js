import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';

const Todo = () => {
  const [isUpdate, setIsUpdate] = useState(false);

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
  }, [isUpdate]);

  return (
    <StyledTodo>
      <h1>Todo</h1>
      <TodoForm update={setIsUpdate} />
      <TodoList currentTodos={currentTodos} getTodos={getTodos} />
    </StyledTodo>
  );
};

export default Todo;

const StyledTodo = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
`;
