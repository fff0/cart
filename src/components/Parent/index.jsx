import React from 'react'

const AAA =function(props){
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}
class Parent extends React.Component {
  constructor (props){
    super(props)

    this.state = {
      inputVal: '标题'
    }
  }
  render () {
    return (
      <div>
        <AAA name= {this.state.inputVal}></AAA>
        <h1>{this.state.inputVal}</h1>
        <Son
          fn1 = { this.fn1.bind(this) }
        ></Son>
      </div>
    )
  } 
  fn1 (value) {
    this.setState({
      inputVal: value
    })
  }
}
class Son extends React.PureComponent {
  render () {
    return (
      <div>
        <input type="text" ref='input'/>
        <button onClick={this.xiugai.bind(this)}>点击修改标题</button>
      </div>

    )
  }
  xiugai () {
    if(this.refs.input.value !== ''){
      this.props.fn1(this.refs.input.value);
      this.refs.input.value= ''
    }
  }
}

export default Parent
