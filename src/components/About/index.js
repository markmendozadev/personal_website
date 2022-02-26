import { useEffect,useRef,useState } from 'react'
import './about.css'
import '../../App.css'
import logo from '../../assets/markmendoza.jpg'
const About = () => {
  const [isVisible,setIsVisible] = useState(false);
  const imgRef = useRef(null)

  const callbackFn = (entries) => {
    const [ entry ] = entries;
    setIsVisible(entry.isIntersecting);
  }
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    let observer = new IntersectionObserver(callbackFn, options);
    if(!isVisible){
      if(imgRef.current){
        observer.observe(imgRef.current)
      }
    }
    return () => {
      if(imgRef.current){
        observer.unobserve(imgRef.current)
      }
    }
  },[isVisible]);

  console.log(isVisible);
  return (
    <div className='about__container' id='about'>
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
          <img src={logo} alt='profile_img' width='90%' height='90%' className={`profile_img ${isVisible ? 'rotate_img' : ''}`} ref={imgRef}/>
        </div>
      </div>
    </div>
  )
}

export default About