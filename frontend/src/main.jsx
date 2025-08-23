// Main rendering of the app's content
// Main link to DOM tree (Root starts here)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
