// todo相关的reducer文件
const initState = {
  inputVal: '',
  todoList: []
}
export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'SETINPUTVAL':
    newState.inputVal = action.value
    return newState

    case 'TODOADD':
    newState.todoList.push(state.inputVal)
    return newState

    default:
      return newState
  }
}
