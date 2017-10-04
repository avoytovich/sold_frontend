import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import reducer from './components/Login/loginReducer';
import { Main } from './../src/containers';
import { SignUp } from './../src/components';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router path='/' history={browserHistory} >
      <Route path='/main' component={Main} />
      <Route path='/signup' component={SignUp} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
