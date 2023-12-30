import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './components/menu/Menu'
import Home from './components/home/Home'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/about',
      },
      {
        path: '/work',
      },
      {
        path: '/contact',
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
