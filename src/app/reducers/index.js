/**
 * Created by Kirill Yakushev aka nemaeska on 13.03.17.
 */
import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actionTypes';

const { SHOW_ALL } = VisibilityFilters;

const VisibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case (SET_VISIBILITY_FILTER):
      return action.filter;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case (ADD_TODO):
      return [...state, {
        id: Math.random(),
        text: action.text,
        complited: false,
      }];
    case (TOGGLE_TODO):
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });
    default:
      return state;
  }
};

export default combineReducers({
  VisibilityFilter,
  todos,
});
