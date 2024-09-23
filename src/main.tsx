// Components
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Views
import HomeView from './Views/HomeView';
import SecurityView from './Views/SecurityView';

// Styles
import './index.css';
import NavbarComponent from './Components/NavbarComponent';

// Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '/security',
    element: <SecurityView />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavbarComponent />
    <RouterProvider router={router} />
  </StrictMode>
);
