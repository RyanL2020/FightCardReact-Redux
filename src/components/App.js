import React from 'react';
//import Home from "./Home";
//import About from "./About"; 
//import Fighter from "./FighterList"
//import Navbar from "./Navbar";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import FighterList from './FighterList';

class App extends React.Component {
    render() {
        return (
        <div className="ui container">  
            <FighterList/> 
            
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
