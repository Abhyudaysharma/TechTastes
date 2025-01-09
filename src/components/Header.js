import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

const [btnNameReact, setbtnNameReact]= useState("Login");
console.log("header render");

useEffect(()=> {
  console.log("useEffect called");
  
})


    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
          
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link></li>
            <li>
              <Link to="/about">About us</Link></li>
            <li><Link to="/contact" >Contact Us</Link></li>
            <li>cart</li>
            <button className="login" onClick={()=>{
              setbtnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;