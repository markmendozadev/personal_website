import '../../App.css'
import './projects.css'
import Project from './Project'
const Projects = () => {
  return (
    <div className='container' id='projects'>
      <h2 className='main__text'>PROJECTS</h2>
      <p className='sub__text'>view all projects</p>
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