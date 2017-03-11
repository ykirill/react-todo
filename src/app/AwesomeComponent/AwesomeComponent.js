import React from 'react';

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likesCount: 0 };
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    const newLikesCount = this.state.likesCount + 1;
    this.setState({ likesCount: newLikesCount });
  }

  render() {
    return (
      <div>
        Likes: <span><b>{this.state.likesCount}</b></span>
        <div><button onClick={this.onLike}>Like</button></div>
      </div>
    );
  }
}

export default AwesomeComponent;
