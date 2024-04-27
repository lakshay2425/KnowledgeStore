import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Finance from "./Components/Categories/Finance/Finance";
import Biography from "./Components/Categories/Biography/Biography";
import Skillbased from "./Components/Categories/Skillbased/Skillbased";
import SelfHelp from "./Components/Categories/SelfHelp/SelfHelp";
import Fictional from "./Components/Categories/Fictional/Fictional";
import Contact from "./Components/Features/Forms/Contact";
import Suggestion from "./Components/Features/Forms/Suggestion";
import Feedback from "./Components/Features/Forms/Feedback";
import Login from "./Components/Features/Forms/Login";
import Signup from "./Components/Features/Forms/Signup";
import Cart from "./Components/Features/Cart";
import Account from "./Components/Features/Account";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/Finance",
      element: (
        <>
          <Navbar />
          <Finance />
        </>
      ),
    },
    {
      path: "/feedback",
      element: (
        <>
          <Navbar />
          <Feedback />
        </>
      ),
    },
    {
      path: "/suggestion",
      element: (
        <>
          <Navbar />
          <Suggestion />
        </>
      ),
    },
    {
      path: "/Biography",
      element: (
        <>
          <Navbar />
          <Biography />
        </>
      ),
    },
    {
      path: "/Fictional",
      element: (
        <>
          <Navbar />
          <Fictional />
        </>
      ),
    },
    {
      path: "/SelfHelp",
      element: (
        <>
          <Navbar />
          <SelfHelp />
        </>
      ),
    },
    {
      path: "/SkillBased",
      element: (
        <>
          <Navbar />
          <Skillbased />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: "/Suggestions",
      element: (
        <>
          <Navbar />
          <Suggestion />
        </>
      ),
    },
    {
      path: "/Feedback",
      element: (
        <>
          <Navbar />
          <Feedback />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/Signup",
      element: (
        <>
          <Navbar />
          <Signup />
        </>
      ),
    },
    {
      path: "/Cart",
      element: (
        <>
          <Navbar />
          <Cart />
        </>
      ),
    },
    {
      path: "/Account",
      element: (
        <>
          <Navbar />
          <Account />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
