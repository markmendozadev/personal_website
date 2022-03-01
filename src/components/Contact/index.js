import { Button } from '..';
import useObserver from '../Hooks';
import './contact.css';

const Contact = () => {
  const [containerRef,isVisible] = useObserver();

  return (
    <div id='contact' ref={containerRef}>
        <h2 className={`${isVisible ? 'contact__anim' : ''}`} style={{transitionDelay: "50ms"}}>Contact Me</h2>
        <p className={`${isVisible ? 'contact__anim' : ''}`} style={{transitionDelay: "200ms"}}>If you have any question or you want to say hi just click the button below to email me i’ll try to get back to you as soon as possible.</p>
        <Button className={`email__button ${isVisible ? 'contact__anim' : ''}`} style={{transitionDelay: "400ms"}}>Message Me!</Button>
    </div>
  )
}

export default Contact