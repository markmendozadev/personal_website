import './button.css'
const Button = (props) => {
  return (
    <a {...props} className={`${props.className} btn__yellow`}>{props.children}</a>
  )
}

export default Button