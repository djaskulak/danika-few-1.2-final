import React, { Component } from 'react';

class Like extends Component {
  constructor(props) {
    super(props)

    this.state = { likes: 0 }
  }

  increment() {
    this.setState({ likes: this.state.likes + 1 })
  }

  decrement() {
    this.setState({ likes: this.state.likes - 1 })
  }

  render() {
    return (
      <div>
        <p><b>Likes:</b> {this.state.likes}</p>

        <button className='likeButton' onClick={(e) => { this.decrement(); }} >
          DisLike
        </button>

        <button className='likeButton' onClick={(e) => { this.increment(); }} >
          Like
        </button>

      </div>
    )
  }

}

export default Like