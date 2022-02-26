import { Button } from '..';
import './contact.css';

const Contact = () => {
  return (
    <div id='contact'>
        <h2>Contact Me</h2>
        <p>If you have any question or you want to say hi just click the button below to email me i’ll try to get back to you as soon as possible.</p>
        <Button className='email__button'>Message Me!</Button>
    </div>
  )
}

export default Contact