import React, { Component } from 'react'
import Input from '../../components/Input/Input'
import List from '../../components/List/List'
import './TodoList.css'


class TodoList extends Component{
  constructor(props){
    super(props)
    this.state = {
      todoData: []
    }
  }
  onSubmitTodo(e){
    if (e.key === 'Enter') {
      console.log(e.currentTarget.value())
    }
  }
  onSubmitChange(e){
    console.log(e)
  }
  render() {
    let todo = this.state.todoData.map((item, index)=>{
      return (<li className="item" key={ index }>{ item }</li>)
    })
    return (
      <div className="container">
        <div className="todo-list">
          <div className="form">

          </div>
          <ul className="items">
            {
              this.state.todoData.length!==0 ? todo : <li className="placeholder">暂无事项</li>
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default TodoList