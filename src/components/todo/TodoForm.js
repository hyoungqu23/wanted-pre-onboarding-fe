import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const TodoForm = ({ update }) => {
  const [todo, setTodo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const createTodo = async (todo) => {
    try {
      const response = await axios.post(
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

      console.log('POST', response);
      setTodo('');
      update(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      setIsLoading(true);
      createTodo(todo);
      console.log('할 일이 추가되었습니다.');
      setIsLoading(false);
    } else {
      alert('내용을 입력해주세요.');
    }
  };

  return (
    <StyledTodoForm>
      <input
        type="text"
        value={todo}
        onChange={handleChange}
        placeholder="Enter your Works..."
      />
      {!isLoading ? (
        <button onClick={handleSubmit}>Add</button>
      ) : (
        <button disabled>Add</button>
      )}
    </StyledTodoForm>
  );
};

export default TodoForm;

const StyledTodoForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  input,
  button {
    margin-bottom: 0.5em;
    padding: 0.5em;
    border-radius: 8px;
    height: 2em;

    &::placeholder {
      color: #aaa;
      font-size: 0.75em;
    }
  }

  input {
    background-color: #e3e3e3;
    width: 80%;
  }

  button {
    font-size: 1em;
    background-color: #ffc107;
    font-weight: bold;

    &:disabled {
      background-color: #e3e3e3;
    }
  }
}
`;
