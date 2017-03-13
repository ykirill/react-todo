/**
 * Created by Kirill Yakushev aka nemaeska on 11.03.17.
 */
import React from 'react';
import Form from '../../components/form/Form';
import Item from '../../components/item/Item';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', items: [] };
  }
  handleOnChange(value) {
    this.setState({
      value,
      items: this.state.items,
    });
  }
  handleOnClick() {
    const id = Math.random();
    const value = this.state.value;
    const newItems = [...this.state.items, {
      value,
      id,
      completed: false,
    }];
    this.setState({
      value: '',
      items: newItems,
    });
  }
  handleOnDelete(id) {
    const newItems = this.state.items.filter(item =>
      item.id !== id);
    this.setState({
      value: this.state.value,
      items: newItems,
    });
  }
  render() {
    const items = this.state.items;
    const value = this.state.value;
    return (
      <div>
        <Form
          value={value}
          handleOnChange={val => this.handleOnChange(val)}
          handleOnClick={() => this.handleOnClick()}
        />
        {items.map(item =>
          <Item
            key={item.id}
            item={item}
            handleOnDelete={id => this.handleOnDelete(id)}
          />)}
      </div>
    );
  }
}

export default Main;
