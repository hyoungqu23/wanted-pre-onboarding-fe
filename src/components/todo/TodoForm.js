import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const TodoForm = () => {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const createTodo = async (todo) => {
    await axios.post(
      'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos',
      {
        todo,
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      },
    );

    setTodo('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createTodo(todo);
  };

  return (
    <StyledTodoForm>
      <input type="text" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </StyledTodoForm>
  );
};

export default TodoForm;

const StyledTodoForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1em;

  input {
    width: 100%;
  }

  input,
  button {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    height: 2rem;
    border: none;
    background-color: #f5f5f5;

    &:focus {
      background-color: #ffc107;
    }

    &:hover {
      border: 2.5px solid #ffc107;
    }
  }

  button {
    font-size: 0.8rem;
    font-weight: bold;
    background-color: #ffc107;

    &:hover {
      border: 2.5px solid black;
    }
  }
`;
