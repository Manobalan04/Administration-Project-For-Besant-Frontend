import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './Pages/Login';
import Choose_account from './Pages/Choose_account';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "choose_account",
    element: <Choose_account/>
  },
  {
    path: "choose_account/Login",
    element: <Login/>
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
