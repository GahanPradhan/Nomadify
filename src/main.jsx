import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreateTrip from './pages/create-trip/CreateTrip.jsx';
import Header from './components/custom/Header.jsx';
import { Toaster } from 'sonner';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from './pages/view-trip/[tripId]/Index.jsx';
import MyTrips from './pages/my-trips/index.jsx';
import HomePage from './pages/home-page/index.jsx';
import LocationDetector from './pages/image-detector/LocationDetector.jsx';
import DashboardFooter from './components/custom/Footer.jsx';
import ProtectedRoute from './components/custom/Protected.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/create-trip',
      element: (
        <ProtectedRoute>
          <CreateTrip />
        </ProtectedRoute>
      )
    },

    {
      path: '/home-page',
      element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      )
    },
    {
      path: '/view-trip/:tripId',
      element: (
        <ProtectedRoute>
          <Viewtrip />
        </ProtectedRoute>
      )
    },
    {
      path: '/my-trips',
      element: (
        <ProtectedRoute>
          <MyTrips />
        </ProtectedRoute>
      )
    },
    {
      path: '/image-detect',
      element: (
        <ProtectedRoute>
          <LocationDetector />
        </ProtectedRoute>
      )
    },
    {
      path: '*',
      element: <App />
    },
  ],
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header router={router} />
      <Toaster />
      <RouterProvider router={router}>
      </RouterProvider>
      <DashboardFooter router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
