import React, { Component } from 'react';
import './Input.css'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  changeHandler(e) {
    this.setState({
      value: e.target.value
    })
  }
  keyUphandler(e) {
    const value = this.state.value
    if (e.key === 'Enter' && value.trim()) {
      this.props.onSubmitTodo(value)
      this.setState({
        value: ''
      })
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          autoFocus
          onChange={this.changeHandler.bind(this)}
          onKeyUp={this.keyUphandler.bind(this)}
          placeholder="请输入待办事项"/>
      </div>
    )
  }
}

export default Input

