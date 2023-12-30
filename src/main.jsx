import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/menu'
  },
  {
    path: '/about'
  },
  {
    path: '/work'
  },
  {
    path: '/contact'
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
