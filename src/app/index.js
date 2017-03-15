/**
 * Created by Kirill Yakushev aka nemaeska on 11.03.17.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Main from './containers/Main/Main';

/* global document:true */
render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('app'),
);
