import logo2 from '../assets/logo.png';
import SearchBar from './SearchBar';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo2} alt="Airbnb Logo" />
      </div>
      <SearchBar/>
      <p className="copyright">&copy; 2024 Netflix, Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
