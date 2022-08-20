import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <StyledTodo>
      <h1>Todo</h1>
      <TodoForm />
      <TodoList />
    </StyledTodo>
  );
};

export default Todo;

const StyledTodo = styled.div``;
