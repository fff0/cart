import React from 'react';
import ReactDOM from 'react-dom';
// import Todo from './components/todo';
// import Parent from './components/Parent/index.jsx'
// import Login from './components/login/index.jsx'
// import Zujian from '../components/Zujian/index.jsx'
// import PropType from 'prop-types';
import Todo from './components/Todolist/index.jsx'
import Car from './components/Car/index.jsx'



ReactDOM.render(
  <>
    {/* <Todo></Todo>
    <Parent></Parent> */}
    {/* <Login></Login> */}
    {/* <Zujian></Zujian> */}
    <Todo></Todo>
    <hr></hr>
    <Car></Car>
  </>,
  document.getElementById('root')
)
