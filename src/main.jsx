import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import MainContent from './Components/MainContent.jsx';
import Contact from './Pages/Contact.jsx';
import MySkills from './Pages/MySkills.jsx';
import Projects from './Pages/Projects.jsx';
import ProjectsDetails from './Components/projectsDetails.jsx';
import PageNotFound from './Pages/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MainContent /> },
      { path: 'contact', element: <Contact /> },
      { path: 'mySkills', element: <MySkills /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:id', element: <ProjectsDetails/> },
      { path: '*', element: <PageNotFound/>
       }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
