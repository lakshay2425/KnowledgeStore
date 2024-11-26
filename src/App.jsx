import React, { Suspense, lazy, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import axios from 'axios';

const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Footer = lazy(() => import("./Components/Home/Footer"));

// Lazy load other components
const components = {
  Home: lazy(() => import('./Components/Home/Home')),
  Finance: lazy(() => import('./Components/Categories/Finance')),
  Biography: lazy(() => import('./Components/Categories/Biography')),
  Skillbased: lazy(() => import('./Components/Categories/Skillbased')),
  SelfHelp: lazy(() => import('./Components/Categories/SelfHelp')),
  Fictional: lazy(() => import('./Components/Categories/Fictional')),
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
  ProductView: lazy(() => import("./Components/utils/ProductView")),
  SearchResult : lazy(() => import("./Components/Navbar/SearchResult")),
  Error404 : lazy(() => import("./Components/utils/Error404"))
};

const routes = [
  { path: '/', component: 'Home' },
  { path: '/Finance', component: 'Finance' },
  { path: '/Biography', component: 'Biography' },
  { path: '/Fictional', component: 'Fictional' },
  { path: '/SelfHelp', component: 'SelfHelp' },
  { path: '/SkillBased', component: 'Skillbased' },
  { path: '/Contact', component: 'Contact' },
  { path: '/Suggestion', component: 'Suggestion' },
  { path: '/Feedback', component: 'Feedback' },
  { path: '/Login', component: 'Login' },
  { path: '/Signup', component: 'Signup' },
  { path: '/Cart', component: 'Cart' },
  
  { path: '/Admin/Create', component: 'Create' },
  { path: '/Admin/Read', component: 'Read' },
  { path: '/Admin/Update', component: 'Update' },
  { path: '/Wishlist', component: 'Wishlist' },
  { path: '/Profile', component: 'Profile' },
  { path: '/ProductView', component: 'ProductView' },
  {path : "/SearchResult," , components :"SearchResult"},
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
          <Suspense fallback={<div>Loading...</div>}>
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
    document.addEventListener('contextmenu', preventDefault);
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'a')) {
        preventDefault(e);
      }
    });
  
    return () => {
      document.removeEventListener('contextmenu', preventDefault);
      document.removeEventListener('keydown', (e) => {
        if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'a')) {
          preventDefault(e);
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
