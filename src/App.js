import './App.css';
import Home from '././pages/Home';
import About from '././pages/About';
import Portfolio from './pages/Portfolio';
import Testmonial from './pages/Testmonial';

const App = () => {
  return (
    <div className='app'>
      <Home />
      <About />
      <Portfolio />
      <Testmonial />
    </div>
  );
}

export default App
