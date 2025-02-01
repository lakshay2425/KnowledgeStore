import React, { Suspense, lazy, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import axios from 'axios';
import Loader from './Components/utils/Loader';

const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Footer = lazy(() => import("./Components/Home/Footer"));

// Lazy load other components
const components = {
  Home: lazy(() => import('./Components/Home/Home')),
  Category: lazy(() => import('./Components/Categories/Cateorgy')),
  Contact: lazy(() => import('./Components/Features/Forms/Contact')),
  Suggestion: lazy(() => import('./Components/Features/Forms/Suggestion')),
  Feedback: lazy(() => import('./Components/Features/Forms/Feedback')),
  Login: lazy(() => import('./Components/Features/Forms/Login')),
  Signup: lazy(() => import('./Components/Features/Forms/Signup')),
  Cart: lazy(() => import('./Components/Features/Cart')),
  Create: lazy(() => import('./Components/Features/adminPanel/create')),
  Read: lazy(() => import('./Components/Features/adminPanel/read')),
  Update: lazy(() => import('./Components/Features/adminPanel/update')),
  Wishlist: lazy(() => import('./Components/Features/Wishlist')),
  Profile: lazy(() => import("./Components/Features/Account/Profile")),
  SearchResult : lazy(() => import("./Components/Navbar/SearchResult")),
  Error404 : lazy(() => import("./Components/utils/Error404"))
};

const routes = [
  { path: '/', component: 'Home' },
  { path: '/Finance', component: 'Category' },
  { path: '/Biography', component: 'Category' },
  { path: '/Fictional', component: 'Category' },
  { path: '/Self-Help', component: 'Category' },
  { path: '/Skill-based', component: 'Category' },
  { path: '/Contact', component: 'Contact' },
  { path: '/Suggestion', component: 'Suggestion' },
  { path: '/Feedback', component: 'Feedback' },
  { path: '/Login', component: 'Login' },
  { path: '/Signup', component: 'Signup' },
  { path: '/Cart', component: 'Cart' },
  { path: '/Admin/Create', component: 'Create' },
  { path: '/Admin/Read', component: 'Read' },
  { path: '/Admin/Update', component: 'Update' },
  { path: '/Admin/Orders', component: 'Orders' },
  { path: '/Wishlist', component: 'Wishlist' },
  { path: '/Profile', component: 'Profile' },
  {path : '/SearchResult' , component :'SearchResult'},
];

routes.push({
  path: '*', // This will match any path
  component: "Error404", // Use the NotFound component
});


const App = () => {
  axios.defaults.withCredentials = true;
  const router = createBrowserRouter(
    routes.map(({ path, component }) => ({
      path,
      element: (
        <>
          <Navbar />
          <Suspense fallback={<Loader/>}>
          {React.createElement(components[component])}
          </Suspense>
          <Footer />
        </>
      ),
    }))
  );

  useEffect(() => {
    const preventDefault = (e) => {
      e.preventDefault();
    };
  
    const handleKeyDown = (e) => {
      if (e.ctrlKey && (e.key === 'u' || e.key === 's')) {
        preventDefault(e);
      }
    };
  
    document.addEventListener('contextmenu', preventDefault);
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('contextmenu', preventDefault);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    <>
     <RouterProvider router = {router}/> 
    </>
  )
}

export default App;
