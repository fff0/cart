import React from 'react';
class Todo extends React.Component{
  constructor (props) {
    super (props);

    this.state = {
      inputValue: '',
      todoList: []
    }
    this.add = this.add.bind(this);
    this.chan = this.chan.bind(this);
    this.delete = this.delete.bind(this);
  }

  render () {
    return(
      <div>
        <div>
          <input type="text" ref='inp' value={this.state.inputValue}
          onChange={this.chan}/>
          <button onClick={this.add}>添加</button>
        </div>
        <div>
          <ul>
            {
              this.state.todoList.map((item,index) => {
                return(
                  <li key={index}>{item} <button onClick={this.delete.bind(null,index)}>删除</button></li>
                )
              })
            }
          </ul>
        </div>
      </div>

    )
  }
  add () {
    let value = this.refs.inp.value
    let list = this.state.todoList
    if(value !== ''){
      list.push(value)
    }
    // console.log(list)
    this.setState({
      todoList: list
    })
  }
  delete (index) {
    // console.log(index)
    let list = this.state.todoList
    list.splice(index,1);
    this.setState({
      todoList: list
    })
  }
  chan (e) {
    let value = e.target.value;
    this.setState({
      inputValue: value
    })
  }

}

export default Todo;
