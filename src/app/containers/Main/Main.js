/**
 * Created by Kirill Yakushev aka nemaeska on 11.03.17.
 */
import React from 'react';
import { connect } from 'react-redux';

import Form from '../../components/form/Form';
import Item from '../../components/item/Item';

class Main extends React.Component {
  render() {
    const { todos } = this.props;
    console.log(todos);
    return (
      <div>
        {/* <Form
         value={value}
         handleOnChange={val => this.handleOnChange(val)}
         handleOnClick={() => this.handleOnClick()}
         />
         {items.map(item =>
         <Item
         key={item.id}
         item={item}
         handleOnDelete={id => this.handleOnDelete(id)}
         />)}*/}
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos,
}))(Main);
