import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';

import './index.css';
import App from './App';
// import TodoApp from './components/TodoApp';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

console.log('mmm', store.getState())
ReactDOM.render( 
    <Provider store={store}>
        <App />
  </Provider>  , 
  document.getElementById('root'));
registerServiceWorker();
