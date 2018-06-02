import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="ui container" style={{padding: '30px'}}>
        <div className="ui secondary pointing menu">
          <Link to="/home" className="item">首页</Link>
          <Link to="/tv" className="item">电视</Link>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
