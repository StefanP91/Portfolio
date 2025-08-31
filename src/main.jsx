import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root';
import './index.css'

import {createBrowserRouter, RouterProvider } from 'react-router';
import About from './pages/AboutMe';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/ContactMe';
import Homepage from './pages/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        path: '/',
        element: <Homepage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'education',
        element: <Education />,
      },
      {
        path: 'experience',
        element: <Experience />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
