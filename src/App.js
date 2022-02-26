import './App.css'
import { About, Contact, Footer, Header, NavBar, Projects } from "./components";


function App() {

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
