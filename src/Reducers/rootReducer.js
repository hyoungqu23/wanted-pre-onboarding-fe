import { combineReducers } from 'redux';
import { todoSlice } from './todoReducer';
import { userSlice } from './userReducer';

export const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});
