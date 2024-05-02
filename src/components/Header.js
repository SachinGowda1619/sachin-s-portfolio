import './Header.css';
import cross_image from '../assets/cross.svg';

function Header() {
  return (
    <div className='header'>
      <div className='menu-container'>
        <div className='menu-list-container'>
          <ul className='menu-list'>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Testmonial</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <img src={cross_image} alt='Close' className='cross-image'></img>
        {/* <img src={hamburger_image} alt='Open' className='toggle-image'></img> */}
      </div>
    </div>
  );
}

export default Header;
