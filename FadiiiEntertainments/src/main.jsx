import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";

import Navbar from './Compo/Navbar/Navbar';
import Deals from './Compo/Deals/Deals';
import ErrorPage from './Error-page';
import Home from './Compo/Home/Home';
import Promo from './Compo/Promo/Promo';
import Contact from './Compo/Contact/Contact';
import {BrowserRouter as Router} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/deals",
    element: <Deals />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/promo",
    element: <Promo />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <App />
    
    {/* <RouterProvider router={router} /> */}
    </Router>
    
  </React.StrictMode>,
)
