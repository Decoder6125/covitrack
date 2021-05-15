import React from 'react';
import './App.css';
import Grid from './components/Grid';
import Covid from './components/Covid';
import Statec from './components/Statec';
import Error from './components/Error';
import Logo from './components/Logo';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
   <>
   <Logo />
   <Grid />
   <Switch>
     <Route exact path="/" component={Covid} />
     <Route exact path="/Statec" component={Statec} />
     <Route component ={Error} />
   </Switch>


   
   </>
  );
}

export default App;
