import "./Header.css"
import logo from "../assets/logo.svg"
import { Link, NavLink } from "react-router-dom"
import { ApiContext } from "../context/Context"
import SwitchMenu from "./SwitchMenu"
import { useState } from "react"

const Header = () => {
  const {
    token,
    handleLogout,

  } = ApiContext();

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)  
  }


  return (
    <header className="container">
      <div className="logo"><Link to={"/"}><img src={logo} alt="logo" /></Link> </div>

       <div className={toggle ? "nav" : "nav disabled"}>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          {!token ? <li><NavLink to={"/login"}>Login</NavLink></li> : null}
          {!token ? <li><NavLink to={"/register"}>Register</NavLink></li> : null}
          {token && <li className="logout" onClick={handleLogout}>Logout</li> }
        </ul>
      </div>  
      

      <div className="toggleMenuMobile" onChange={handleToggle}>
        <SwitchMenu/>
      </div>
    </header>
  )
}

export default Header