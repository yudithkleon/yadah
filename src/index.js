import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import { store } from './store/store';
import  'react-bootstrap'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
   document.getElementById('root')
);

