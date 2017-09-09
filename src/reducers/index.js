import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
})
console.log('hhh', rootReducer)
export default rootReducer;