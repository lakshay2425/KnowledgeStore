import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Finance from './Components/Categories/Finance'
import Biography from './Components/Categories/Biography'
import Skillbased  from './Components/Categories/Skillbased'
import SelfHelp from './Components/Categories/SelfHelp'
import Fictional from './Components/Categories/Fictional'
import Contact from './Components/Features/Forms/contact'
import Suggestion from './Components/Features/Forms/suggestion'
import Feedback from './Components/Features/Forms/feedback'
import Login from './Components/Features/Forms/login'
import Signup from './Components/Features/Forms/signup'
import Cart from './Components/Features/cart'
import Account from './Components/Features/account'
import Footer from "./Components/Home/Footer"
import Create from "./Components/Features/adminPanel/create"
import Read from "./Components/Features/adminPanel/read"
import Update from './Components/Features/adminPanel/update'

const App = () => {
  const router =createBrowserRouter([
    {
      path : "/",
      element : <><Navbar/><Home/><Footer/></>
    },
    {
      path : "/Finance",
      element : <><Navbar/><Finance/><Footer/></>
    },
    {
      path : "/feedback",
      element : <><Navbar/><Feedback/><Footer/></>
    },
    {
      path : "/suggestion",
      element : <><Navbar/><Suggestion/><Footer/></>
    },
    {
      path : "/Biography",
      element : <><Navbar/><Biography/><Footer/></>
    },
    {
      path : "/Fictional",
      element : <><Navbar/><Fictional/><Footer/></>
    },
    {
      path : "/SelfHelp",
      element : <><Navbar/><SelfHelp/><Footer/></>
    },
    {
      path : "/SkillBased",
      element : <><Navbar/><Skillbased/><Footer/></>
    },
    {
      path : "/Contact",
      element : <><Navbar/><Contact/><Footer/></>
    },
    {
      path : "/Suggestions",
      element : <><Navbar/><Suggestion/><Footer/></>
    },
    {
      path : "/Feedback",
      element : <><Navbar/><Feedback/><Footer/></>
    },
    {
      path : "/Login",
      element : <><Navbar/><Login/><Footer/></>
    },
    {
      path : "/Signup",
      element : <><Navbar/><Signup/><Footer/></>
    },
    {
      path : "/Cart",
      element : <><Navbar/><Cart/><Footer/></>
    },
    {
      path : "/Account",
      element : <><Navbar/><Account/><Footer/></>
    },
    {
      path : "/Create",
      element : <><Navbar/><Create/><Footer/></>
    },
    {
      path : "/Read",
      element: <><Navbar/><Read/><Footer/></>
    },
    {
      path : "/Update",
      element : <><Navbar/><Update/><Footer/></>
    }
  ]);
  return (
    <>
     <RouterProvider router = {router}/> 
    </>
  )
}

export default App;
