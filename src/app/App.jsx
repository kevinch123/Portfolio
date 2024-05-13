import Footer from './components/footer';
import Header from './components/header';
//import Navbar from './components/navbar';

function App() {
  return (
    <div className="flex flex-col h-screen bg-blue-500 font-roboto">
      <header>
      </header>
      <main className="flex-1 flex flex-col">
        <Header/>
        <section className="flex-1">
        </section>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
