import React, { Suspense, lazy, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Navbar = lazy(()=> import("./Components/Navbar/Navbar"));
const Home = lazy(() => import('./Components/Home/Home'));
const Finance = lazy(() => import('./Components/Categories/Finance'));
const Biography = lazy(() => import('./Components/Categories/Biography'));
const Skillbased = lazy(() => import('./Components/Categories/Skillbased'));
const SelfHelp = lazy(() => import('./Components/Categories/SelfHelp'));
const Fictional = lazy(() => import('./Components/Categories/Fictional'));
const Contact = lazy(() => import('./Components/Features/Forms/Contact'));
const Suggestion = lazy(() => import('./Components/Features/Forms/Suggestion'));
const Feedback = lazy(() => import('./Components/Features/Forms/Feedback'));
const Login = lazy(() => import('./Components/Features/Forms/Login'));
const Signup = lazy(() => import('./Components/Features/Forms/Signup'));
const Cart = lazy(() => import('./Components/Features/Cart'));
const Account = lazy(() => import('./Components/Features/Account'));
const Create = lazy(() => import('./Components/Features/adminPanel/create'));
const Read = lazy(() => import('./Components/Features/adminPanel/read'));
const Update = lazy(() => import('./Components/Features/adminPanel/update'));
const Wishlist = lazy(() => import('./Components/Features/Wishlist'));
const Footer = lazy(()=> import("./Components/Home/Footer"));
const SearchResult = lazy(() => import("./Components/Navbar/SearchResult"));
const Profile = lazy(() => import("./Components/Features/Account/Profile"));
import axios from 'axios';
const Error404 = lazy(()=> import("./Components/utils/Error404"));


const App = () => {
  axios.defaults.withCredentials = true;
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/SearchResult',
      element: (
        <>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <SearchResult />
        <Footer/>
        </>
      )

    },
    {
      path: '/Finance',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Finance />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/suggestion',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Suggestion />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Biography',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Biography />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Fictional',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Fictional />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/SelfHelp',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <SelfHelp />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/SkillBased',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Skillbased />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Contact',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Suggestions',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Suggestion />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Feedback',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Feedback />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Login',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Signup',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Signup />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Cart',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Account',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Account />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Admin/Create',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Create />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Admin/Read',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Read />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Admin/Update',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Update />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Wishlist',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Wishlist />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: '/Profile',
      element: (
        <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>
          <Footer />
        </>
      ),
    },
    {
      path : "*",
      element : (
        <>
        <Navbar/>
        <Suspense fallback={<div>Loading...</div>}>
            <Error404/>
          </Suspense>
          <Footer />
        </>
      )
    }
  ]);

  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'a')) {
        e.preventDefault();
      }
    });
  
    return () => {
      document.removeEventListener('contextmenu', (e) => e.preventDefault());
      document.removeEventListener('keydown', (e) => {
        if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'a')) {
          e.preventDefault();
        }
      });
    };
  }, []);
  return (
    <>
     <RouterProvider router = {router}/> 
    </>
  )
}

export default App;
