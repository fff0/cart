import React, { Component } from 'react'
import store from '../../store/index'
import Input from './input.jsx'
import List from './list.jsx'


export default class Todo extends Component {
  constructor(props) {
    super(props)

    console.log(store.getState())

    this.state = {
      inputVal : store.getState().todo.inputVal,
      todoList : store.getState().todo.todoList
      //store.getState().todoList
    }

    // 订阅 仓库的变化必须要有订阅
    store.subscribe(() => {
      this.setState(() => {
        return {
          inputVal: store.getState().todo.inputVal,
          todoList : store.getState().todo.todoList
        }
      })
    })
  }
  render() {
    return (
      <div>
        <Input inputVal = {this.state.inputVal}
        onChange={this.change}
        onClick={this.add}></Input>
        <List todoList = {this.state.todoList}></List>
      </div>
    )
  }
  change(event){
    let value = event.target.value
    console.log('sss')
    // 1.action
    let action ={
      type: 'SETINPUTVAL',
      value: value
    }
    // 2.dispatch()
    store.dispatch(action)
    // 运行完成之后到store 里的reducer.js中
  }
  add(){
    console.log('add')
    store.dispatch({
      type: 'TODOADD'
    })
  }
}
