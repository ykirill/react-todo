/**
 * Created by Kirill Yakushev aka nemaeska on 12.03.17.
 */
import React, { PropTypes } from 'react';
import st from './item.css';

class Item extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  render() {
    const { id, text, completed, onClick } = this.props;
    return (
      <div className={st.item}>
        <p className={st.item_text}>{completed ? <s>{text}</s> : text}</p>
        <button className={st.btn} onClick={() => onClick(id)}>Done</button>
      </div>
    );
  }
}

export default Item;
