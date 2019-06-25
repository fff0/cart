import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props)

    this.state={
      isok: false,
      username: [],
      password: [],
      sex: '1'
    }
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <label>
          <input type="text" placeholder='请输入账号' name='username' value = {this.state.username}
          onChange = {this.change}/>
        </label>
        <br/>
        <label>
          <input type="password" placeholder='请输入密码' name='password' value = {this.state.password}
          onChange = {this.change}/>
        </label>
        <br/>
        <label>
          性别<input type="radio" value='1' onChange={this.sex}
              checked={this.state.sex === '1'}/>男
              <input type="radio" value='0' onChange={this.sex}
              checked={this.state.sex === '0'}/>女
        </label>
        <br/>
        <label>
          <input type="checkbox" checked = {this.state.isok} onChange = {this.gou}/>我同意啥啥啥规则
        </label>

        <br/>
        <button disabled={!this.state.isok} onClick={this.login}>注册</button>
      </div>
    )
  }
  gou = (event) => {
    this.setState({
      isok: event.target.checked
    })
  }
  sex = (event) => {
    let value = event.target.value
    this.setState({
      sex: value
    })
  }
  change = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name]: value
    })
  }
  login = () => {
    let value = this.state
    alert('性别'+value.sex+'用户名'+value.username+'密码'+value.password)
  }
}
