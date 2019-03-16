import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import './index.css';

const middleware = [thunk];
const store = createStore(
  rootReducer, 
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
