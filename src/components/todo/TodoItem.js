import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const TodoItem = ({ todos }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [todo, setTodo] = useState('');

  const handleComplete = (id) => {
    setIsCompleted(!isCompleted);
    updateTodo(id);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleEditChange = (e) => {
    setTodo(e.target.value);
  };

  const updateTodo = async (id) => {
    try {
      await axios.put(
        `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${id}`,
        {
          todo,
          isCompleted,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(
        `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${id}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {todos.map((todo) => {
        return (
          <StyledTodoItem key={todo.id}>
            {isEdit ? (
              <form>
                <input
                  type="text"
                  value={todo.todo || ''}
                  onChange={handleEditChange}
                />
                <div>
                  <button
                    onClick={() => {
                      updateTodo(todo.id);
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
                <span iscompleted={isCompleted ? 'true' : 'false'}>
                  {todo.todo}
                </span>
                <StyledTodoButtons>
                  <button
                    onClick={() => {
                      handleComplete(todo.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button onClick={handleEdit}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </StyledTodoButtons>
              </div>
            )}
          </StyledTodoItem>
        );
      })}
    </>
  );
};

export default TodoItem;

const StyledTodoItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  margin: 1em 0;

  p {
    text-decoration: ${(props) =>
      props.isCompleted ? 'line-through' : 'none'};
  }

  form {
    width: 100%;
    border-bottom: 1px solid #333;
    display: flex;
    justify-content: space-between;

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

    span {
      text-decoration: ${(props) =>
        props.isCompleted ? 'line-through' : 'none'};
      color: ${(props) => (props.isCompleted ? '#333' : '#000')};
    }
  }
`;

const StyledTodoButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  justify-content: space-between;
  gap: 0.5em;

  button {
    color: blue;
  }
`;
