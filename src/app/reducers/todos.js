/**
 * Created by Kirill Yakushev aka nemaeska on 13.03.17.
 */
import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes';

const initial = [{
  id: 0.15164321211554,
  text: 'Initial message',
  completed: false,
}];

const todo = (state = {}, action) => {
  switch (action.type) {
    case (ADD_TODO):
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case (TOGGLE_TODO):
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, { completed: !state.completed });
    default:
      return state;
  }
};

const todos = (state = initial, action) => {
  switch (action.type) {
    case (ADD_TODO):
      return [
        ...state,
        todo(null, action),
      ];
    case (TOGGLE_TODO):
      return state.map(t =>
        todo(t, action));
    default:
      return state;
  }
};

export default todos;
