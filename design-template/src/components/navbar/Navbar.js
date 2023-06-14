import React from 'react'
import { Link, useNavigate, NavLink } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';
import { useContext } from "react";
import './navbar.css'
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const { dispatch } = useContext(AuthContext);


 const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGOUT" });
      navigate("/")
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };
  
  return (
   /*
   <div className={click ? "main-container" : ""}  onClick={()=>Close()} >
    <div className="nav-container">
    <nav>
      <h1>WEBSITE</h1>
      <div className="middle-nav">
        <ul className="middle-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="features">Features</Link></li>
          <li><Link to="orderpage">Order</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </div>
      <ul className="social-media">
        <li><Link to=""><FaFacebook/></Link></li>
        <li><Link to=""><AiFillTwitterCircle/></Link></li>
        <li><Link to=""><FaLinkedin/></Link></li>
        <li><Link to=""><FaInstagramSquare/></Link></li>
      </ul>
      
        <ul className="end-nav">
          
          {user ? null :
          <li className='login-nav'><Link to="login">Login</Link></li>}
          {user ? <li className='signup'><button className='signup' onClick={handleLogout}>Logout</button></li> :
          <li className='signup'><Link to="login">signup</Link></li>}
        </ul>
      
            <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
      
    </nav>
    </div>
    </div>
*/


  <nav className="navbar" onClick={e => e.stopPropagation()}>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Writing<span>Agency </span>
           
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <ul className="end-nav">
            {user ? null :
            <li className='login-nav'><Link to="login">LOGIN</Link></li>}
            {user ?  <li className='signup1' onClick={handleLogout}>Logout</li> :
            <li className='signup'><Link to="signup">SIGNUP</Link></li>}
        </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    
    
  )
}

export default Navbar