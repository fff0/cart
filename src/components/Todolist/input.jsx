import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div>
        <input type="text"
        value = {this.props.inputVal}
        onChange ={this.props.onChange}/>
        <button onClick = {this.props.onClick}>添加</button>
      </div>
    )
  }
}
