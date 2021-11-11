import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

class Navbar extends React.Component {
  render() {
    return (
      <div>
        {/* <BrowserRouter >      */}
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/fighter"
          exact
          style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Fighters
        </NavLink>
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default Navbar;
