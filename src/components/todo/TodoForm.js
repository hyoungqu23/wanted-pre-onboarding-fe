import React from 'react';
import styled from 'styled-components';

const TodoForm = () => {
  return (
    <form>
      <label>Todo</label>
      <input type="text" />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;

const StyledTodoForm = styled.div``;
