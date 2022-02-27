import { Link } from "react-scroll";
import { FaBars } from 'react-icons/fa'
import { Button } from '..'
import './navbar.css'
import { useState, useRef } from "react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(false)
  const toggleHandler = (e) => {
    const nav = navRef.current;
    let button = e.currentTarget;
    const visivility = nav.getAttribute("data-visible");
    if(visivility === "false"){
      nav.setAttribute("data-visible", "true");
      button.setAttribute("aria-expanded", "true");
      setIsOpen(() => true);
    } else {
      nav.setAttribute("data-visible", "false");
      button.setAttribute("aria-expanded", "false");
      setIsOpen(() => false);
    }

  }
  const closeBgHandler = () => {
    setIsOpen(() => false);
    navRef.current.setAttribute("data-visible", "false");

  }

  return (
          <div className="navigation__container">
            <div>
              <h2><Link to="header" smooth={true} offset={-100} duration={50}>Mark Mendoza</Link></h2>
            </div>
            <button className='mobile-nav-toggle' onClick={toggleHandler} aria-expanded="false" aria-controls="primary-navigation" >{!isOpen ? <FaBars size={30} /> : 'X'}</button>
            {isOpen && <div className="nav__overlay" onClick={closeBgHandler}></div> }
            <nav>         
              <ul className='primary-navigation' id='primary-navigation' data-visible='false' ref={navRef}>
                <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={50}>ABOUT ME</Link></li>
                <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-150} duration={50}>PROJECTS</Link></li>
                <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={50}>CONTACT</Link></li>
                <li><Button className='resumeButton'>RESUME</Button></li>
              </ul>            
            </nav>

          </div>

  
  )
}

export default NavBar