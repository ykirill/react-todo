/**
 * Created by Kirill Yakushev aka nemaeska on 11.03.17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../../actions';

import Form from '../../components/form/Form';
import Item from '../../components/item/Item';

class Main extends React.Component {
  render() {
    const { todos, dispatch } = this.props;
    return (
      <div>
        <Form
         onSubmit={(e) => {
           e.preventDefault();
           const input = e.target.elements.text;
           dispatch(addTodo(input.value));
           input.value = '';
         }}
        />
         {todos.map(item =>
        <Item
         key={item.id}
         item={item}
         onClick={id => dispatch(toggleTodo(id))}
        />)}
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos,
}))(Main);
