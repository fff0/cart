import React, { Component } from 'react'
import store from '../../store/index.js'
import './index.css'

export default class Car extends Component {
  constructor(props){
    super(props)

    this.state={
      productList: store.getState().car.productList,
      carList: store.getState().car.carList
    }

    store.subscribe(() => {
      this.setState({
        productList: store.getState().car.productList,
        carList: store.getState().car.carList
      })
    })
  }
  render() {
    return (
      <div className='box'>
        <ul className='left'>
        {
          this.state.productList.map(item =>{
            return(
              <li key={item.id}>
                <p>名称：{item.name}</p>
                <p>单价：{item.price}￥</p>
                <button onClick={this.jia.bind(this, item)}>+</button>
                <button onClick={this.jian.bind(this, item)}>-</button>
              </li>
            )
          })
        }
        </ul>
        <ul className='right'>
        {
          this.state.carList.map(item => {
            return(
              <li key ={item.id}>
                <p>名称：{item.name}</p>
                <p>单价：{item.price}￥</p>
                <p>数量：{item.num}</p>
                <p>总价：{item.total}￥</p>
              </li>
            )
          })
        }

        </ul>
      </div>
    )
  }
  // 减
  jian(product) {
    store.dispatch({
      type: 'JIAN',
      product
    })
  }
  // 加
  jia(product) {
    store.dispatch({
      type: 'JIA',
      product
    })
  }
}
