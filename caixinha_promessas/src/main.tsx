import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//paginas
import Home from "./routes/Home";
import Versiculos from "./routes/Versiculos";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/versiculos",
        element: <Versiculos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);