import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faPen,
  faXmark,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, getTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  // Mode State
  const [isEdit, setIsEdit] = useState(false);

  const handleComplete = (todo) => {
    const completeTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    updateTodo(completeTodo);
  };

  const handleEdit = (todo) => {
    const editedTodo = {
      ...todo,
      todo: newTodo,
    };

    updateTodo(editedTodo);
  };

  const updateTodo = async (todo) => {
    try {
      const response = await axios.put(
        `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${todo.id}`,
        {
          id: todo.id,
          todo: todo.todo,
          isCompleted: todo.isCompleted,
          userId: todo.userId,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('PUT', response);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(
        `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${id}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      console.log('DELETE', response);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledTodoItem key={todo.id}>
      {isEdit ? (
        <form>
          <input
            type="text"
            defaultValue={todo.todo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleEdit(todo);
                setIsEdit(false);
              }}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </form>
      ) : (
        <div className="normal">
          <StyledTodo isCompleted={todo.isCompleted ? true : false}>
            {todo.todo}
          </StyledTodo>
          <StyledTodoButtons isCompleted={todo.isCompleted ? true : false}>
            <button
              onClick={() => {
                handleComplete(todo);
              }}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </StyledTodoButtons>
        </div>
      )}
    </StyledTodoItem>
  );
};

export default TodoItem;

const StyledTodoItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  margin: 1em 0;

  form {
    width: 100%;

    display: flex;
    justify-content: space-between;

    input {
      background-color: #ddd;
      border: none;
      border-radius: 5px;
      width: 80%;
      padding: 0.5em;
      font-size: 0.8em;
    }

    div {
      width: 15%;
      display: flex;
      justify-content: space-around;
    }
  }

  div.normal {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const StyledTodo = styled.span`
  text-decoration: ${(props) => {
    return props.isCompleted ? 'line-through' : 'none';
  }};
  color: ${(props) => (props.isCompleted ? '#aaa' : '#000')};
`;

const StyledTodoButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  justify-content: space-between;
  gap: 0.5em;

  color: ${(props) => (props.isCompleted ? 'blue' : '#000')};
`;
