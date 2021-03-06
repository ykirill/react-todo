/**
 * Created by Kirill Yakushev aka nemaeska on 12.03.17.
 */
import React from 'react';
import s from './form.css';

class Form extends React.Component {
  handleOnChange(e) {
    e.preventDefault();
    this.props.handleOnChange(e.target.value);
  }
  handleOnClick(e) {
    e.preventDefault();
    this.props.handleOnClick();
  }
  render() {
    return (
      <form action="">
        <input
          className={s.text}
          value={this.props.value}
          type="text" onChange={e => this.handleOnChange(e)}
        />
        <input className={s.submit} type="submit" onClick={e => this.handleOnClick(e)}/>
      </form>
    );
  }
}

export default Form;
