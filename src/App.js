import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
