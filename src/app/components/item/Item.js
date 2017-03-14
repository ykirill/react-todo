/**
 * Created by Kirill Yakushev aka nemaeska on 12.03.17.
 */
import React, { PropTypes } from 'react';
import st from './item.css';

class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    handleOnDelete: PropTypes.func.isRequired,
  };
  render() {
    const { id, text, completed } = this.props;
    return (
      <div className={st.item}>
        <p className={st.item_text}>{text}</p>
        <button className={st.delete_btn} onClick={id => this.handleOnDelete(id)}>x</button>
      </div>
    );
  }
}

export default Item;
