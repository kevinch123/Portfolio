import { About } from "./components/about";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Nav from "./components/nav";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

function App() {
  return (
    <div className='bg-customBlue bg-no-repeat bg-cover overflow-hidden'
    
    >
     <Banner/>
     <Nav/>
     <About/>
     <Skills/>
     <Portfolio/>
     <Experience/>
     <Contact/>
    </div>

  );
}

export default App;
