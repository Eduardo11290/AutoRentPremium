import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
// 1. Importăm BrowserRouter aici
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* 2. AICI ESTE FIX-UL: Setăm basename */}
      <BrowserRouter basename="/e-plantShopping">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)