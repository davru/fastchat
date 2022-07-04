import './styles/Navbar.css';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} alt="whatsapp fast chat" />
      <div className="navbar__list">
        <a className="navbar__item navbar__item--active">The app</a>
        <a className="navbar__item" href="mailto:contact@dsgdsr.me">
          Report issue
        </a>
        <a
          className="navbar__item"
          href="https://www.whatsapp.com/"
          target="_blank"
        >
          Whatsapp web
        </a>
        <a className="navbar__item" href="https://dsgdsr.me" target="_blank">
          The developer ;)
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
