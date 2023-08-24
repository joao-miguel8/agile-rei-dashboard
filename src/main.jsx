import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/redux/store.js'
import { auth } from './firebase-server/firebase'


// import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import Dashboard from '@/components/Dashboard'
// import ErrorPage from '@/components/ErrorPage'
// import Login from '@/components/Login';
// import CreateAnAccount from './components/CreateAccount'







  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
)
