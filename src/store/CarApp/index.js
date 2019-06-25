// Car相关的reducer文件
const initState = {
  productList:[
    {id: 1, name: 'apple', price: 5},
    {id: 2, name: 'banana', price: 8},
    {id: 3, name: 'origan', price: 2}
  ],
  carList: []
}
export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {

    case 'JIA':
    var product = action.product
    var index = state.carList.findIndex(item => item.id === product.id)

    if(index > -1){
     newState.carList[index].num ++
     newState.carList[index].total = newState.carList[index].num * newState.carList[index].price

    }else{
      newState.carList.push({...product,...{
        num:1,
        total:product.price*1
      }})
    }
    return newState

    case 'JIAN':
    var product2 = action.product
    var index2 = state.carList.findIndex(item => item.id === product2.id)

    if(index2 > -1){
      if(newState.carList[index2].num > 1){
        newState.carList[index2].num--;
        newState.carList[index2].total -= newState.carList[index2].price
      }else{
        newState.carList.splice(index2, 1)
      }
    }


    return newState


    default:
      return newState
  }
}
