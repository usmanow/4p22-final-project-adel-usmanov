import React from 'react';
import './App.css';
import {MainPage} from './components/MainPage/MainPage';
import {ErrorPage} from './components/ErrorPage/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
      path: '/',
      element: <MainPage />,
  },
  { path: '*', element: <ErrorPage /> },
]);


export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;