import { About } from "./components/about";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Nav from "./components/nav";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";







function App() {
  return (
    <div className='bg-black bg-no-repeat bg-cover overflow-hidden'
    
    >
     <Banner/>
     <Nav/>
     <About/>
     <Skills/>
     <Portfolio/>
     <Experience/>
     <Contact/>
     <Footer/>


    <div className="h-[400px]"></div>
    </div>

  );
}

export default App;
