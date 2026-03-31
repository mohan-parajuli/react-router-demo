import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route } from 'react-router-dom';
import { RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './component/Home/home.jsx';
import About from './component/About/About.jsx';
import Contact from './component/Contact/Contact.jsx';
import User from './component/User/User.jsx';
import Github,{githubinfo} from './component/Github/Github.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
      loader={githubinfo}
      path='github' 
      element={<Github/>}
      />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
