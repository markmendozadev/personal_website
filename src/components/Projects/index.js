import '../../App.css'
import './projects.css'
import Project from './Project'
import useObserver from '../Hooks'

const Projects = () => {
  const [containerRef,isVisible] = useObserver();
  console.log(isVisible)
  return (
    <div id='projects' className='projects' ref={containerRef}>
      <h2 className={`main__text ${isVisible ? 'projects__anim' : ''}`}  style={{transitionDelay: "50ms"}}>PROJECTS</h2>
      <p className={`sub__text ${isVisible ? 'projects__anim' : ''}`}  style={{transitionDelay: "200ms"}}><a href="https://github.com/markmendozadev?tab=repositories" target='_blank' rel='noreferrer'>view all projects</a></p>
      <div className='project__grid'>
        <Project  isVisible={isVisible} style={{transitionDelay: "400ms"}} />
        <Project  isVisible={isVisible} style={{transitionDelay: "600ms"}} />
        <Project  isVisible={isVisible} style={{transitionDelay: "800ms"}} />
        <Project isVisible={isVisible} style={{transitionDelay: "1000ms"}} />
      </div>
    </div>
  )
}

export default Projects