import React, { Component } from 'react';
import './List.css'

class Input extends Component {
  clickHandler(id){
    this.props.onDeleteTodo(id)
  }
  render() {
    let todoData = this.props.todoData
    return (
      <div>
        <ul className="items">
          {
            this.props.todoData.length !== 0
              ? todoData.map((item, index)=>{
                  return (<li className="item"  key={ index }>{ item.text } <span className="delete" onClick={this.clickHandler.bind(this, item.id)}>×️</span></li>)
                })
              : <div className="placeholder">暂无事项</div>
          }
        </ul>
      </div>
    )
  }
}

export default Input

