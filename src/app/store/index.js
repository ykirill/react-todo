/**
 * Created by Kirill Yakushev aka nemaeska on 13.03.17.
 */
import { createStore } from 'redux';
import todoApp from '../reducers';

const store = createStore(todoApp);

export default store;
