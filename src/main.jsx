import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './Route/Route';
import AuthProvider from './Component/AuthProvider/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </React.StrictMode>
  </div>,
)
