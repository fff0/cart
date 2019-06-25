import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todoList.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
    )
  }
}
