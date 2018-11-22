import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import BitcoinList  from './components/BitcoinList/BitcoinList';
import getAllCoins from './store/reducers/getAllCoins';


const rootReducer = combineReducers({
  coins: getAllCoins,
});

const store = createStore(rootReducer, applyMiddleware(thunk) );

ReactDOM.render(
  <Provider store={store}>
    <BitcoinList />
  </Provider>,
  document.getElementById('app')
);