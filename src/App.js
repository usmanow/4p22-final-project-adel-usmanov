import React from 'react';
import './App.css';
import {MainPage} from './components/MainPage/MainPage';
import Feedback from './components/Feedback/Feedback';
import Product from './components/Product/Product';
import  Busket  from './components/Busket/Busket';
import {
  BrowserRouter, Route, Switch
} from "react-router-dom";


export const App = () => {
  return (
<BrowserRouter basename='/4p22-final-project-adel-usmanov/'>
  <Switch>
    <Route path='/feedback'>
      <Feedback />
    </Route>
    <Route path='/product/:productId'>
      <Product />
    </Route>
    <Route path='/busket'>
      <Busket />
    </Route>
    <Route path='/' exact>
      <MainPage />
    </Route>

  </Switch>
</BrowserRouter>
  
  )
}

export default App;