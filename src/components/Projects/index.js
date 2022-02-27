import '../../App.css'
import './projects.css'
import Project from './Project'
import useObserver from '../Hooks'

const Projects = () => {
  const [containerRef,isVisible] = useObserver();
  return (
    <div id='projects' className={`projects ${isVisible ? 'projects__anim' : ''}`}>
      <h2 className='main__text' ref={containerRef}>PROJECTS</h2>
      <p className='sub__text'><a href="https://github.com/markmendozadev?tab=repositories" target='_blank' rel='noreferrer'>view all projects</a></p>
      <div className='project__grid'>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}

export default Projects