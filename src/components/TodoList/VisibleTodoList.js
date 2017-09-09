import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import ACTIONS from '../../actions';

// 根据filter 获取相应的todos
const getVisibleTodos = (todos, filter) => {
   console.log(`999 getVisibleTodos: todos=${todos} filter=${filter}`);
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);  
  }
}

// const mapStateToProps = (state) => ({
//   todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })

const mapStateToProps = (state) => {
  console.log(`mapStateToTodoListProps(): state.todos = ${state}`);
  return {
    todos: getVisibleTodos(
        state.todos, 
        state.visibilityFilter
      )
  }
}


const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(ACTIONS.toggleTodo(id))
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList;