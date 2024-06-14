import React from 'react';
import './navbar.css';
import logo from '../../assests/Logo-white.png';
import contact from '../../assests/contact.png';
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
        
          
         <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
          <div className="desktopMenu">
             <Link className="desktopMenuList">Home</Link>
             <Link className="desktopMenuList">About</Link>
             <Link className="desktopMenuList">Education</Link>
             <Link className="desktopMenuList">Experience</Link>
          </div>
          <button className="desktopMenuBtn">
            <img src={contact} alt="" className='contact' />Contact me 

          </button>
         </nav>
  );
}

export default Navbar