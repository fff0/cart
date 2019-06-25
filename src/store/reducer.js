// 主reducer

// 1.引入拆分出去的reducer
// import CarApp from './CarApp/index.js'
// import TodoApp from './TodoApp'

// const initState = {
  // inputVal: '',
  // todoList: [],
  // productList:[
  //   {id: 1, name: 'apple', price: 5},
  //   {id: 2, name: 'banana', price: 8},
  //   {id: 3, name: 'origan', price: 2}
  // ],
  // carList: []
// }

// export default (state = initState, action) => {
  // switch (action.type) {
  //   case 'SETINPUTVAL':
  //     return Object.assign({},state,{
  //       inputVal: action.value
  //     })
  //   case 'TODOADD':
  //   return{
  //     todoList:[...state.todoList, state.inputVal ]
  //   }
  //   case 'JIAN':
  //   let product2 = action.product
  //   let index2 = state.carList.findIndex(item => item.id === product2.id)

  //   if(index2 > -1){
  //     let newCarList2 = JSON.parse(JSON.stringify(state.carList))
  //     if(newCarList2[index2].num>1){
  //       newCarList2[index2].num--
  //       newCarList2[index2].total = newCarList2[index2].price * newCarList2[index2].num
  //     }else{
  //     newCarList2.splice(index2,1)
  //     }
  //     return Object.assign({},state,{
  //       carList: newCarList2
  //     })
  //   }else{
  //     return state
  //   }

  //   case 'JIA':
  //   let index = state.carList.findIndex(item => item.id === action.product.id)
  //   let product = action.product
  //   if(index > -1){
  //     // state.carList[index].num++
  //     let newCarList = JSON.parse(JSON.stringify(state.carList))

  //     newCarList[index].num++
  //     newCarList[index].total = newCarList[index].price * newCarList[index].num
  //     return Object.assign({},state,{
  //       carList: newCarList
  //     })
  //   }else{
  //     product =Object.assign({},product,{
  //       num:1,
  //       total:product.price*1
  //     })
  //     return Object.assign({},state,{
  //       carList: [...state.carList, product]
  //     })
  //   }

  //   default:
  //     return state
  // }


//   return {
//     car: CarApp(state.car, action),
//     todo: TodoApp(state.todo, action)
//   }

// }


// 第二种
import { combineReducers } from 'redux'

import CarApp from './CarApp/index.js'
import TodoApp from './TodoApp'

export default combineReducers({
  car: CarApp,
  todo: TodoApp
})
// 相当于
// const initState = {}
// export default (state = initState, action) => {
//       return {
//         car: CarApp(state.car, action),
//         todo: TodoApp(state.todo, action)
//       }

//   }
