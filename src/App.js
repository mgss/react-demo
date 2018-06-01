import React, { Component } from 'react';
import CommentBox from './comment/CommentBox';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container" >
        {/*<CommentBox data={ comments }/>*/}
        <CommentBox url="mock/comment.json"/>
      </div>
    );
  }
}

export default App;
