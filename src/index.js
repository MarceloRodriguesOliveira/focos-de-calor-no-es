import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home';
import Info from './Pages/Info'
import ErrorPage from './Pages/ErrorPage'
import PontosDetails from './componentes/PontosDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,

    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/info",
        element: <Info/>
      },
      {
        path: "/details/:id",
        element: <PontosDetails/>,
      },
    ]
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
