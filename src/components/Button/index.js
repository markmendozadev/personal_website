import './button.css'
const Button = (props) => {
  return (
    <button {...props} className={`${props.className} btn__yellow`}>{props.children}</button>
  )
}

export default Button