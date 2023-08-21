import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Contacts from './components/Contacts'
import Home from './components/Home'

const router = createBrowserRouter([
  {path: "/", element: <App />, children: [
    {path: "/", element: <Home />},
    {path: "/about", element: <About />},
    {path: "/contacts", element: <Contacts />},
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
