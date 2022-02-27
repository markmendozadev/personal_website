import { useEffect,useRef,useState } from 'react'

const useObserver = () => {
  const [isVisible,setIsVisible] = useState(false);
  const containerRef = useRef(null)

  const callbackFn = (entries) => {
    const [ entry ] = entries;
    setIsVisible(entry.isIntersecting);
  }
  useEffect(() => {
    let observerRefValue = null; // <-- variable to hold ref value

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    let observer = new IntersectionObserver(callbackFn, options);
    if(!isVisible){
      if(containerRef.current){
        observer.observe(containerRef.current)
        observerRefValue = containerRef.current; // <-- save ref value

      }
    }
    return () => {
      if(observerRefValue) {  
        observer.unobserve(observerRefValue)
      }
    }
  },[isVisible]);

  return [containerRef, isVisible]
}

export default useObserver;