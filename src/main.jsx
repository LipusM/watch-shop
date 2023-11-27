import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import HomePage from "./pages/HomePage"
import Watches from "./pages/Watches"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import ShoppingList from "./pages/ShoppingList"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/watches",
        element: <Watches/>,
      },
      {
        path: "/about-us",
        element: <AboutUs/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/shopping-list",
        element: <ShoppingList />
      }
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
