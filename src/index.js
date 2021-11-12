import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './Redux/store';
import App from './components/App/App';
import 'modern-normalize/modern-normalize.css';
import './components/App/App.module.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
