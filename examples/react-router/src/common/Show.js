import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class Show extends Component {
  render() {
    return (
      <h3>
        <Switch>
          <Route exact path={`${this.props.match.path}`} render={(route)=>{
            return <div>节目默认页面</div>
          }}/>
          <Route path={`${this.props.match.path}/show_sub`} render={(route)=>{
            return <div>节目子页面</div>
          }}/>
          <Route path={`${this.props.match.path}/:tvName`} render={(route)=>{
            return <div>节目名称：{route.match.params.tvName}</div>
          }}/>
        </Switch>
      </h3>
    )
  }
}

export default Show