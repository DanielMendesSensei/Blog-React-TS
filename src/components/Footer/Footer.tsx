import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = (): JSX.Element => {
  return (
    <footer>
      <a href="https://github.com/DanielMendesSensei" target="_blank">
        © 2024 Daniel Mendes
      </a>
      {/* Fazer modais para cada um desse: */}
      <Link to={`/about`}>About</Link>
      <Link to={`/contact`}>Contact</Link>
    </footer>
  );
};

export default Footer;
