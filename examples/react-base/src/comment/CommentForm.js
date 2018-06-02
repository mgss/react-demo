import React, { Component } from 'react';

class CommentForm extends Component {
  handleSubmit(event) {
    event.preventDefault()
    let author = this.refs.author.value,
        text = this.refs.text.value
    this.props.onCommentSubmit({
      author,
      text,
      date: '刚刚'
    })
    this.refs.author.value = ''
    this.refs.text.value = ''
  }
  render() {
    return (
      <form className="ui reply form" onSubmit={ this.handleSubmit.bind(this) }>
        <div className="field">
          <input type="text" placeholder="姓名" ref="author"/>
        </div>
        <div className="field">
          <textarea placeholder="评论" ref="text"></textarea>
        </div>
        <button className="ui blue button" type="submit">添加评论</button>
      </form>
    )
  }
}

export default CommentForm