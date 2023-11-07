import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contexts from './feature/Context/index.jsx'
import './index.css'
import Toast from './lib/Toaster/Toast.jsx'
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Contexts>
    <App />
    <Toast />
  </Contexts>
)
