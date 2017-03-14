/**
 * Created by Kirill Yakushev aka nemaeska on 13.03.17.
 */
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionTypes';

export const addTodo = text => ({
  type: ADD_TODO,
  text,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const setVIsibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
