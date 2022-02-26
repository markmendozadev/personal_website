import './about.css'
import '../../App.css'
import logo from '../../assets/markmendoza.jpg'
const About = () => {
  return (
    <div className='container about__container' id='about'>
      <div className='row'>
        <div className='col-lg-8'>
          <h2>About Me</h2>
          <p>
          Hi! My name is Mark and i enjoy coding on a daily basis. My interest towards web development started a few years ago when i was in college when i created my first web app. 
          </p>
          <p>Here are few technologies i’ve been working recently:</p>
          <ul className='tech-list'>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>Redux Toolkit</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className='col-lg-4'>
          <img src={logo} alt='profile_img' width='90%' height='90%' className='profile_img'/>
        </div>
      </div>
    </div>
  )
}

export default About