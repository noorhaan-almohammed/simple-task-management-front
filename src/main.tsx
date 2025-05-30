import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from './pages/Auth.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      { path: "", element: <Login /> },
      { path: "signup", element: <Register /> },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
