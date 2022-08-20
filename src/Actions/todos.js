import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production';

axios.defaults.headers.common['Authorization'] =
  'Bearer ' + localStorage.getItem('token');

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const response = await axios.get('/todos');
  return response.data;
});

export const createTodo = createAsyncThunk('todos/createTodo', async (todo) => {
  const response = await axios.post('/todos', todo);
  return response.data;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async (todo) => {
  const response = await axios.put(`/todos/${todo.id}`, todo);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  const response = await axios.delete(`/todos/${id}`);
  return response.data;
});
