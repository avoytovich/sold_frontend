import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import reducer from './components/Login/loginReducer';
import { Main } from './../src/containers';
import { SignUp, Home } from './../src/components';
import checkAuth from './../src/helper/redirections';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={Main} />
      <Route path='/signup' component={SignUp} onEnter={checkAuth}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
