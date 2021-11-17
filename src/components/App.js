import React from 'react';
//import Home from "./Home";
//import About from "./About"; 
//import Fighter from "./FighterList"
//import Navbar from "./Navbar";
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import New from './New';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import FighterList from './FighterList';
import Navbar from './Navbar';
import Counter from './Counter.js';

class App extends React.Component {
    render() {
        return (
        <div className="ui container">  
            <BrowserRouter>  
             <Navbar />           
              <Switch> 
                <Route exact={true} path="/"> <Counter /> </Route>

                <Route exact={true} path="/about"> <About />  </Route> 
                <Route exact={true} path="/fighter" > <FighterList /> </Route>
              </ Switch >
            </BrowserRouter>
           
        </div>
        );
    }
}

export default App;

//<Router>  
//        
//<Navbar />           
//<Route exact path="/" component={Home} />
//<Route exact path="/about" component={About} />
//<Route exact path="/fighter" component={Fighter} />
//
//</Router>
