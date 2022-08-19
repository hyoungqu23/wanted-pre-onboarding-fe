import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const Todo = () => {
  return (
    <StyledTodo>
      <h1>Todo</h1>
      <TodoForm />
      <TodoItem />
    </StyledTodo>
  );
};

export default Todo;

const StyledTodo = styled.div``;
