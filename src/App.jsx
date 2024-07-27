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
import Footer from "./Components/Footer";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/Finance",
      element: (
        <>
          <Navbar />
          <Finance />
          <Footer />
        </>
      ),
    },
    {
      path: "/feedback",
      element: (
        <>
          <Navbar />
          <Feedback />
          <Footer />
        </>
      ),
    },
    {
      path: "/suggestion",
      element: (
        <>
          <Navbar />
          <Suggestion />
          <Footer />
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
          <Footer />
        </>
      ),
    },
    {
      path: "/SelfHelp",
      element: (
        <>
          <Navbar />
          <SelfHelp />
          <Footer />
        </>
      ),
    },
    {
      path: "/SkillBased",
      element: (
        <>
          <Navbar />
          <Skillbased />
          <Footer />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/Suggestions",
      element: (
        <>
          <Navbar />
          <Suggestion />
          <Footer />
        </>
      ),
    },
    {
      path: "/Feedback",
      element: (
        <>
          <Navbar />
          <Feedback />
          <Footer />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <Navbar />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/Signup",
      element: (
        <>
          <Navbar />
          <Signup />
          <Footer />
        </>
      ),
    },
    {
      path: "/Cart",
      element: (
        <>
          <Navbar />
          <Cart />
          <Footer />
        </>
      ),
    },
    {
      path: "/Account",
      element: (
        <>
          <Navbar />
          <Account />
          <Footer />
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
