/**
 * Created by Kirill Yakushev aka nemaeska on 11.03.17.
 */
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

import Main from '../Main/Main';

class Root extends Component {
  static propTypres = {
    store: PropTypes.object.isRequired,
  };
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Main/>
        </div>
      </Provider>
    );
  }
}

export default Root;
