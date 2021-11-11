import React from 'react';

import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from '../components/Home.js';
import About from '../components/About.js';
import FighterList from '../components/FighterList';
import Navbar from '../components/Navbar'
//import Fighter from 'src/components/Fighter.js';
//import { Home, About, FighterList} from 'src/components'


const Routes = () => (
   <BrowserRouter>  
      <Navbar />           
    <Switch> 
       <Route exact={true} path="/"> <Home /> </Route>

       <Route exact={true} path="/about"> <About />  </Route> 
       <Route exact={true} path="/fighter" > <FighterList /> </Route>
    </ Switch >
</BrowserRouter>
);

export default Routes;
