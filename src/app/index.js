/**
 * Created by Kirill Yakushev aka nemaeska on 11.03.17.
 */
import React from 'react';
import ReactDom from 'react-dom';

import store from './store';
import Root from './containers/root';

/* global document:true */
ReactDom.render(<Root store={store}/>, document.getElementById('app'));
