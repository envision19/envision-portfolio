import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // This "pulls" your design from App.jsx
import './index.css'      // This "pulls" your Tailwind styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)