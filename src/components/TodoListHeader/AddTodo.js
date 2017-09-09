import React from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../../actions';

let AddTodo = ({dispatch}) => {
  let input;
  console.log('11', ACTIONS)
  return (
    <div>
      <input type="text" 
        ref={node => input = node}
      />
      <button 
        type="type"
        onClick={() => {
          dispatch(ACTIONS.addTodo(input.value));
          input.value = '';
        }}
      >ADD TODO</button>
    </div>
  )
}

// AddTodo = connect(
//   state => { // 表示不订阅store 即不需要state
//     return {}
//   },
//   dispatch => { // 发送自身
//     return { dispatch }
//   }
// )(AddTodo);

// 等同于
// AddTodo = connect(
//  null,
//  null
// )(AddTodo);

// 等同于
// 表示不订阅store 只将 dispatch 作为 props
AddTodo = connect()(AddTodo);

export default AddTodo;
