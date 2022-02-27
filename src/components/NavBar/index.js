import { Button } from '..'
import { Link } from "react-scroll";

import './navbar.css'
const NavBar = () => {
  return (
      <nav>
        <div>
          <h2><Link to="header" smooth={true} offset={-100} duration={50}>Mark Mendoza</Link></h2>
          <ul>
            <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={50}>ABOUT ME</Link></li>
            <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-150} duration={50}>PROJECTS</Link></li>
            <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={50}>CONTACT</Link></li>
            <li><Button className='resumeButton'>RESUME</Button></li>
          </ul>
        </div>
      </nav>

  
  )
}

export default NavBar