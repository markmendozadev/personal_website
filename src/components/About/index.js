import './about.css'
import '../../App.css'
import logo from '../../assets/markmendoza.jpg'
import useObserver from '../Hooks'
const About = () => {
  const [containerRef,isVisible] = useObserver();

  return (
    <div className={`about__container`} id='about' ref={containerRef}>
      <div className='row'>
        <div className='col-lg-8' >
          <h2 className={`${isVisible ? 'about__container__anim' : ''}`} style={{transitionDelay: "50ms"}}>About Me</h2>
          <p className={`${isVisible ? 'about__container__anim' : ''}`} style={{transitionDelay: "300ms"}}>
          Hi! My name is Mark and i enjoy coding on a daily basis. My interest towards web development started a few years ago when i was in college when i created my first web app. 
          </p>
          <p className={`${isVisible ? 'about__container__anim' : ''}`} style={{transitionDelay: "600ms"}}>Here are few technologies i’ve been working recently:</p>
          <ul className={`tech-list ${isVisible ? 'li_animated about__container__anim' : ''}`} style={{transitionDelay: "700ms"}}>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>Redux Toolkit</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className='col-lg-4'>
          <img src={logo} alt='profile_img' width='90%' height='90%' className={`profile_img ${isVisible ? 'rotate_img about__container__anim' : ''}`} />
        </div>
      </div>
    </div>
  )
}

export default About