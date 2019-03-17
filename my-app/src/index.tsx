import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import logger from 'redux-logger';
import './index.css';

const middleware = [thunk, logger];
const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
