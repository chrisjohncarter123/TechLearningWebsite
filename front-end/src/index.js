import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import App from './components/app'


const rootReducer = combineReducers({

});

//withou redux, there is passing around tons of props and needless re-rendering
//redux is tiny library and design pattern that makes state changes predictable 


//no need for multiple stores, domain is already split into multiple reducers
const store = createStore(
  rootReducer,
  //used for devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  //needed to use thunk
  applyMiddleware(thunk));


store.subscribe(() => {
 
  console.log("subscription")
});


ReactDOM.render(
  //provider allows store to be accessed in any component in <App />
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root')
  )
  //,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
