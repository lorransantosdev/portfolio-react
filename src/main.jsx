import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import PageNotFound from './pages/PageNotFound.jsx';
import MainContent from './Components/MainContent.jsx';
import Contact from './Pages/Contact.jsx';
import MySkills from './Pages/MySkills.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MainContent/> },
      { path: '/contact', element: <Contact />},
      { path: '/mySkills', element: <MySkills />},
      { path: '*', element: <PageNotFound /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);