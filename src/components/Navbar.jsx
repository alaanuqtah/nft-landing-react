import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assests/logo.png";

const Navbar = ({changeTheme, currentTheme}) => {
  const [navstate,setNavState]= useState(false);
  return (
    <nav>
      <div className="brand-cont">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>

        <div className="toggle-cont">
          <div className="toggle">
            {
              navstate ? <MdClose onClick={()=>setNavState(false)} />: <GiHamburgerMenu onClick={()=>setNavState(true) }/>
            }
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme==="dark"? (
            <ImSun className="light"/> 
            ) : (
            <BsFillMoonFill className="dark"/>)}

          </div>
        </div>
      </div>
      <div className={`links-cont ${navstate ? "nav-visible": ""}`}>
        <div className="links">
          <li><a href="#">Features</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Launch</a></li>
          <li><a href="#">SignUp</a></li>
          <li onClick={changeTheme}>
            {currentTheme==="dark"? (
            <ImSun className="light"/> 
            ) : (
            <BsFillMoonFill className="dark"/>)}

          </li>

        </div>
      </div>

    </nav>
  )
}

export default Navbar
