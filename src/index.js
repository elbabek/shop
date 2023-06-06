import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom"
import Login from './components/pages/login/Login';
import Registration from './components/pages/registration/Registration';
import MainPage from './components/pages/main-page/MainPage';
import { AuthProvider } from './context/AuthContext';
import Profile from './components/pages/profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/profile',
        element: <Profile />
      },
    ]
  },
  {
    path: "/pricing",
    element: <div> page pricing</div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  // </React.StrictMode>
);