// import React from 'react';
// import './App.css';
// import {MainPage} from './components/MainPage/MainPage';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//       path: '/',
//       element: <MainPage />,
//   }
// ]);

// export const App = () => {
//   return (
//     <RouterProvider router={router} />
//   )
// }
import React from 'react';
import './App.css';
import {MainPage} from './components/MainPage/MainPage';
import {
  BrowserRouter, Route, Switch
} from "react-router-dom";


export const App = () => {
  return (
<BrowserRouter basename='/4p22-final-project-adel-usmanov/'>
  <Switch>
    <Route path='/' exact>
      <MainPage />
    </Route>
  </Switch>
</BrowserRouter>
  
  )
}

export default App;