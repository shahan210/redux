import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './App/Store';
import { Provider } from 'react-redux';
import { initialState } from './features/reducers/AddProductSlice';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider initialState={initialState} store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)