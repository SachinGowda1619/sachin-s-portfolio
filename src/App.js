import './App.css';
import Home from '././pages/Home';
import About from '././pages/About';
import Portfolio from './pages/Portfolio';
import Testmonial from './pages/Testmonial';
import Contact from './pages/Contact';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      <Home />
      <About />
      <Portfolio />
      <Testmonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
