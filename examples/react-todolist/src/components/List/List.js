import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: ''
    }
  }
  render() {
    return (
      <input
        type="text"
        autoFocus
        value="todo"
        placeholder="请输入待办事项"/>
    )
  }
}

export default Input

