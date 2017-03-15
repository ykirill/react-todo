/**
 * Created by Kirill Yakushev aka nemaeska on 12.03.17.
 */
import React, { PropTypes } from 'react';
import s from './form.css';

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  render() {
    const { onSubmit } = this.props;
    let input;
    return (
      <form onSubmit={e => onSubmit(e)}>
        <input
          name="text"
          type="text"
          className={s.text}
        />
        <button className={s.submit} type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
