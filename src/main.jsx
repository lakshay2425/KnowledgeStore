import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react';
import store from '../Store/store.jsx';
import { Provider } from 'react-redux';
import Alert from './Components/utils/Alert.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
      <Alert/>
        <App />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>,
)
