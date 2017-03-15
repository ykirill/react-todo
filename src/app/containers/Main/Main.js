/**
 * Created by Kirill Yakushev aka nemaeska on 11.03.17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';

import Form from '../../components/form/Form';
import Item from '../../components/item/Item';

class Main extends React.Component {
  render() {
    const { todos, dispatch } = this.props;
    return (
      <div>
        {/* <Form
         value={value}
         handleOnChange={val => this.handleOnChange(val)}
         handleOnClick={() => this.handleOnClick()}
         />*/}
         {todos.map(item =>
         <Item
         key={item.id}
         id={item.id}
         text={item.text}
         completed={item.completed}
         onClick={id => dispatch(toggleTodo(id))}
         />)}
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos,
}))(Main);
