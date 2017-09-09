let ID = 1
const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: (ID++).toString(),
  text
})

export default addTodo;