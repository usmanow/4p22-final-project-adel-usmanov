import React from 'react';
import './App.css';
import {MainPage} from './components/MainPage/MainPage';
import {Feedback} from './components/Feedback/Feedback';
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
<Route path='/feedback'>
      <Feedback />
    </Route>
  </Switch>
</BrowserRouter>
  
  )
}

export default App;