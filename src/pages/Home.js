import './Home.css';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <div className='home-container'>
        <h2>HI!</h2>
        <h1>I am Sachin Gowda</h1>
        <p>FULL STACK DEVELOPER</p>
        <button>Visit my works</button>
      </div>
    </div>
  );
}

export default Home
