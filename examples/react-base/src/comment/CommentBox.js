import React,{ Component } from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import Axios from 'axios'

class CommentBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.fetchComment()
    // setInterval(()=>{
    //   this.fetchComment()
    // }, 3000)
  }
  handleCommentSubmit(comment) {
    /**
     * 提交评论
     * @type {Object}
     */
    let comments = this.state.data,
        newComments = comments.concat(comment)
    this.setState({
      data: newComments
    })
  }
  fetchComment() {
    /**
     * 获取评论数据
     * @type {}
     */
    const config = {	headers: {'Content-Type': 'application/json','Cache-Control' : 'no-cache'}};
    Axios.get(this.props.url, config)
      .then( (response) => {
        this.setState({
          data: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="ui comments" style={{padding: '40px'}}>
        <h1>评论</h1>
        <div className="ui divider"></div>
        <CommentList data={ this.state.data }/>
        <CommentForm onCommentSubmit={ this.handleCommentSubmit.bind(this) }/>
      </div>
    )
  }
}

export default CommentBox