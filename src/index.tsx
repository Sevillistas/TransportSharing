import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/root.reducer";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
))
store.subscribe(() => console.log('roflanAction', store.getState().auth.isAuth));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
