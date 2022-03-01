// import { useState,useEffect } from 'react';
import './App.css'
import { About, Contact, Footer, Header, NavBar, Projects } from "./components";


function App() {
  // const [isLoading,setIsLoading] = useState(true);
  // useEffect(() => {
  //   const timeout =setTimeout(() => {
  //     setIsLoading(false)
  //   },50)

  
  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // }, []);
  return (
      <>
          <NavBar />
          <div className='container'>
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </>
      );
}

export default App;
