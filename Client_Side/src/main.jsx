import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
<ToastContainer />
   <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
