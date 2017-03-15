/**
 * Created by Kirill Yakushev aka nemaeska on 14.03.17.
 */
import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actionTypes';

const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case (SET_VISIBILITY_FILTER):
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
