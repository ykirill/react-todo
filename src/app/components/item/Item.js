/**
 * Created by Kirill Yakushev aka nemaeska on 12.03.17.
 */
import React, { PropTypes } from 'react';
import st from './item.css';

class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  render() {
    const { item, onClick } = this.props;
    const { id, text, completed } = item;
    return (
      <div className={st.item}>
        <p className={st.item_text}>{completed ? <s>{text}</s> : text}</p>
        <button className={st.btn} onClick={() => onClick(id)}>Done</button>
      </div>
    );
  }
}

export default Item;
