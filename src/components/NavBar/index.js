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
    const visivility = nav.getAttribute("data-visible");
    if(visivility === "false"){
      nav.setAttribute("data-visible", "true");
      setIsOpen(() => true);

    } else {
      nav.setAttribute("data-visible", "false");
      setIsOpen(() => false);

    }
  }

  console.log(isOpen);
  return (
        <div className="navigation__container">
          <div>
            <h2><Link to="header" smooth={true} offset={-100} duration={50}>Mark Mendoza</Link></h2>
          </div>
          <button className="mobile-nav-toggle" aria-controls="primary-navigation" onClick={toggleHandler}>{!isOpen ? <FaBars size={30} /> : 'X'}</button>
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