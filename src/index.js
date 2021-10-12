import React from 'react'
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About"; 
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";


ReactDOM.render(
    <Router>  
        <div>  
            <Navbar />           
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </div>  
    </Router>,
    document.getElementById("root")
  );
    
        