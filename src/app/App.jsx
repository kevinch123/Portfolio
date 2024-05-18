import { About } from "./components/about";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Header from "./components/header";
import Nav from "./components/nav";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";







function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'
    
    >
     <Header/>
     <Banner/>
     <Nav/>
     <About/>
     <Skills/>
     <Portfolio/>
     <Experience/>
     <Contact/>


    <div className="h-[400px]"></div>
    </div>

  );
}

export default App;
