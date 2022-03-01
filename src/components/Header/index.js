import './header.css'
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaBehanceSquare} from 'react-icons/fa'
import useObserver from '../Hooks';
const Header = () => {
  const [containerRef,isVisible] = useObserver();
  return (
    <div className='header__container' id='header' ref={containerRef}>
      <header>
        <p className={`${isVisible ? 'header__container__anim' : ''}`} style={{transitionDelay: "50ms"}}>Hi, my name is</p>
        <h1 className={`${isVisible ? 'header__container__anim' : ''}`} style={{transitionDelay: "200ms"}}>Mark Mendoza.</h1>
        <div className={`typewriter__container ${isVisible ? 'header__container__anim' : ''}`} style={{transitionDelay: "400ms"}}>
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
        </div>
        <div className={`social_icons ${isVisible ? 'header__container__anim' : ''}`} style={{transitionDelay: "600ms"}}>
          <a href="https://www.linkedin.com/in/mark-mendoza-01157a219/" target="_blank" rel="noreferrer"><FaLinkedin size={42} /></a>
          <a href="https://github.com/markmendozadev" target="_blank" rel="noreferrer"><FaGithub size={42} /></a>
          <a href="https://www.behance.net/markmendoza-dev" target="_blank" rel="noreferrer"><FaBehanceSquare size={42} /></a>
        </div>
        <a href="mailto:markmendozadev@gmail.com" className={`hire__button ${isVisible ? 'header__container__anim' : ''}`} style={{transitionDelay: "800ms"}} >Hire Me</a>

      </header>
    </div>
  )
}

export default Header