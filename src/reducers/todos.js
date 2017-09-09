import todo from './todo';

const todos = (state = [], action) => {
  console.log('todos reducer called');
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(s => todo(s, action))
    default:
      return state;
  }
}

export default todos;
