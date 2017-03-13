/**
 * Created by Kirill Yakushev aka nemaeska on 12.03.17.
 */
import React from 'react';
import st from './item.css';

class Item extends React.Component {
  handleOnDelete(e) {
    e.preventDefault();
    this.props.handleOnDelete(this.props.item.id);
  }
  render() {
    return (
      <div className={st.item}>
        <p className={st.item_text}>{this.props.item.value}</p>
        <button className={st.delete_btn} onClick={e => this.handleOnDelete(e)}>x</button>
      </div>
    );
  }
}

export default Item;
