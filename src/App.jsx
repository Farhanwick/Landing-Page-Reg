import React from 'react'
import Register from './register/Register'
import app from './firebase.config'
import { ToastContainer, toast } from 'react-toastify';
import Login from './Login/Login';
import RootLayout from './RootLayout/RootLayout';
import { Route } from 'react-router-dom';

import { createRoutesFromElements,createBrowserRouter} from "react-router-dom";
import { RouterProvider } from 'react-router';
import Forget from './Forget';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

    <Route path="/" element={<Register />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/forget" element={<Forget />}/>
    
      
    </Route>
  )
);       

const App = () => {
  



  return (
    <div>
       <RouterProvider router={router} />
      <ToastContainer/>
  
    </div>
  )
}

export default App
