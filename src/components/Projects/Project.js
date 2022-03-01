import image from '../../assets/markmendoza.jpg'
const Project = (props) => {
  return (
    <div className={`${props.isVisible ? 'projects__anim' : ''}`} style={props.style}>
      <img src={image} width="100%" height="100%" alt='project' />
    </div>
  )
}

export default Project