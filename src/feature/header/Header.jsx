import logo from "../../assets/images/logo.png";
import './style.css';
const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={logo} className="logo" />
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">What's New</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </header>
  );
};
export default Header;