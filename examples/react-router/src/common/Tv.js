import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tv extends Component {
  render() {
    return (
      <div>
        <div className="ui info message">电视节目列表</div>
        <ul>
          <li><Link to="/tv/show" className="item">TvShow</Link></li>
          <li><Link to="/tv/show/show_sub" className="item">TvShowSub</Link></li>
          <li><Link to="/tv/show/CCTV1" className="item">CCTV1</Link></li>
          <li><Link to="/tv/show/CCTV2" className="item">CCTV2</Link></li>
          <li><Link to="/tv/show/CCTV3" className="item">CCTV3</Link></li>
        </ul>
        { this.props.children }
      </div>
    )
  }
}

export default Tv