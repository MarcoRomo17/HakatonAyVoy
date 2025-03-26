import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Admin } from './Admin';
import { Rutas } from './Rutas';
import { History } from './History';
import { Autorization } from './Autorization';
import { Register } from './RegisterDriver';
import { RegisterRoute } from './RegisterRoute';
import { AdminPuntos } from './AdminPuntos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Admin",
    element: <Admin />
  },
  {
    path: "/Rutas",
    element: <Rutas />
  },
  {
    path: "/Historial",
    element: <History />
  },
  {
    path: "/Autorizacion",
    element: <Autorization />
  },
  {
    path: "/Registrar",
    element: <Register />
  },
  {
    path: "/RegistrarRuta",
    element: <RegisterRoute/>
  },
  {
    path: "/AdminPuntos",
    element: <AdminPuntos/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();