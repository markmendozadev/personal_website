import './about.css'
import '../../App.css'
import logo from '../../assets/markmendoza.jpg'
import useObserver from '../Hooks'
const About = () => {
  const [containerRef,isVisible] = useObserver();

  return (
    <div className={`about__container ${isVisible ? 'about__container__anim' : ''}`} id='about' >
      <div className='row'>
        <div className='col-lg-8' ref={containerRef}>
          <h2>About Me</h2>
          <p>
          Hi! My name is Mark and i enjoy coding on a daily basis. My interest towards web development started a few years ago when i was in college when i created my first web app. 
          </p>
          <p>Here are few technologies i’ve been working recently:</p>
          <ul className={`tech-list ${isVisible ? 'li_animated' : ''}`}>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>Redux Toolkit</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className='col-lg-4'>
          <img src={logo} alt='profile_img' width='90%' height='90%' className={`profile_img ${isVisible ? 'rotate_img' : ''}`} />
        </div>
      </div>
    </div>
  )
}

export default About