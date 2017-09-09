import React from 'react';

import AddTodo from './TodoListHeader/AddTodo';
import VisibleTodoList from './TodoList/VisibleTodoList';
import Footer from './TodoFooter/Footer';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp;