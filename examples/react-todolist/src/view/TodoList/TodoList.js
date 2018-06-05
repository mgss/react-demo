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
  onSubmitTodo(value){
    console.log(value)
    const id = this.state.todoData.length
    this.setState({
      todoData: this.state.todoData.concat({
        id: id,
        text: value
      })
    })
    console.log(this.state.todoData)
  }
  onDeleteTodo(id){
    console.log(id)
    this.setState({
      todoData: this.state.todoData.filter(item=>{
        return item.id !== id
      })
    })
  }
  render() {
    return (
      <div className="container">
        <div className="todo-list">
          <div className="form">
            <Input onSubmitTodo={this.onSubmitTodo.bind(this)}/>
          </div>
          <div className="items">
            <List todoData={this.state.todoData} onDeleteTodo={this.onDeleteTodo.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList