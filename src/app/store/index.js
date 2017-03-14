/**
 * Created by Kirill Yakushev aka nemaeska on 13.03.17.
 */
import { createStore } from 'redux';
import App from '../reducers';
console.log(App);

const store = createStore(App);

export default store;
