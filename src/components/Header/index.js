import './header.css'
import { Button } from '..';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaBehanceSquare} from 'react-icons/fa'
const Header = () => {
  return (
    <div className='header__container' id='header'>
    <header>
      <p>Hi, my name is</p>
      <h1>Mark Mendoza.</h1>
      <Typewriter
          options={{
          autoStart: true,
        }}  
        onInit={(typewriter) => {
          typewriter
          .typeString('I\'m a Front-End Developer.')
          .pauseFor(1500)
          .deleteChars(20)
          .typeString('React Developer.')
          .pauseFor(1500)
          .callFunction((state) => {
            // turn off animation
            state.elements.cursor.style.animation = 'none'
            // hide cursor
            state.elements.cursor.style.display = 'none'
          }).start();
        }} 
      />
      <div className='social_icons'>
        <FaLinkedin size={42} />
        <FaGithub size={42} />
        <FaBehanceSquare size={42} />
      </div>
      <Button className="hire__button">Hire Me</Button>
    </header>
  </div>
  )
}

export default Header