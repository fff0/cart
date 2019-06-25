import React, { Component } from 'react'

export default class Zujian extends Component {
  constructor(props){
    super(props)

    this.state = {
      Worldname : '蔡徐坤',
      color: 'blue'
    }
  }
  render() {
    return (
      <div >
        <button onClick ={this.color} style={{color : this.state.color}}>改变颜色</button>
        <Hello changeworldname={this.changeworldname} color={this.state.color}></Hello>
        <World name = {this.state.Worldname} color={this.state.color}></World>

      </div>
    )
  }

  changeworldname = () => {
    if(this.state.Worldname === '蔡徐坤'){
      this.setState({
        Worldname : '鸡你太美'
      })
    }else{
      this.setState({
        Worldname : '蔡徐坤'
      })
    }

  }

  color = () => {
    if(this.state.color === 'blue'){
      this.setState({
        color: 'red'
      })
    } else if (this.state.color === 'red'){
      this.setState({
        color: 'green'
      })
    }else{
      this.setState({
        color: 'blue'
      })
    }

  }
}

class Hello extends Component {
  render() {
    return (
      <div style={{color: this.props.color}}>
        <h2>Hello</h2>
        <button onClick = {this.onchange} style={{color: this.props.color}}>music</button>
      </div>
    )
  }
  onchange = () => {
    this.props.changeworldname();
  }
}

class World extends Component {
  render() {
    return (
      <div style={{color: this.props.color}}>
        <h2>World天-{this.props.name}</h2>
      </div>
    )
  }
}
